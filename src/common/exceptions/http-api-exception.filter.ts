import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  UnauthorizedException,
  Logger
} from '@nestjs/common';
import { ThrottlerException } from '@nestjs/throttler';
import { Request, Response } from 'express';
import { ErrorDefine } from '../define/ErrorDefine';
import { CustomValidationError } from '../dtos/error/ValidationError';
import { ErrorCommonResponse } from '../dtos/ErrorCommonResponse.dto';
import { HttpExceptionErrorResponseDto } from '../dtos/HttpExceptionError.response.dto';
import { getToday } from '../utils/moment';
import { winstonLogger } from '../utils/winston';

@Catch()
export class HttpApiExceptionFilter implements ExceptionFilter {
  constructor() {}
  async catch(exception: Error, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    let statusCode: number;
    let error: HttpExceptionErrorResponseDto;    
    if (exception instanceof ThrottlerException) {
      statusCode = 429;
      error = {
        code: ErrorDefine['Auth-9999'].code,
        message: ErrorDefine['Auth-9999'].message as string,
        error: ThrottlerException.name,
        statusCode: 429
      };
    } else if (exception instanceof CustomValidationError) {
      statusCode = exception.getStatus();
      const getError = exception.getResponse();
      const objError = getError as HttpExceptionErrorResponseDto;
      error = {
        ...objError
      };
    } else if (exception instanceof HttpException) {
      statusCode = exception.getStatus();
      const getError = exception.getResponse();
      if (typeof getError === 'string') {
        error = {
          error: exception.name,
          message: getError,
          statusCode: statusCode
        };
      } else {
        // 에러 코드화를 진행할 부분
        const objError = getError as HttpExceptionErrorResponseDto;
        error = {
          code: objError.code,
          message: getError, // classValidator Message 배열로 넘어와서 문자열 처리
          error: exception.name,
          statusCode: statusCode
        };
      }
    } else {
      statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      const errorResponse = {
        timestamp: new Date(),
        path: request.url,
        method: request.method,
        error: {
          error: 'Internal server error',
          statusCode: statusCode,
          message: '서버에러 관리자한테 문의 주세요'
        }
      };
      // 콘솔
      Logger.error(
        'ExceptionsFilter',
        exception.stack,
        request.method + request.url
      );
      // 로깅
      winstonLogger.error(`${ getToday() } | ${ exception.stack } | ${ request.method + request.url }`);
      return response.status(statusCode).json(errorResponse);
    }

    const errorResponse = {
      timestamp: new Date(),
      path: request.url,
      method: request.method,
      error: error
    };

    Logger.warn('errorResponse', JSON.stringify(errorResponse));

    return response.status(statusCode).json(errorResponse);
  }
}