import {
  BadRequestException,
  ForbiddenException,
  InternalServerErrorException,
  UnauthorizedException
} from '@nestjs/common';
import { ThrottlerException } from '@nestjs/throttler';
import { ErrorResponseOption } from 'src/common/decorators/ErrorResponse.decorator';
type Keys =
  | 'ERROR-0001'
  | 'ERROR-0002'
  | 'ERROR-9999'
  | 'ERROR-1000'
  ;

export const ErrorDefine: Record<
  Keys,
  ErrorResponseOption & { code: string }
> = {
  // 공통
  'ERROR-0001': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 권한 부족',
    exampleDescription: '해당 사용자는 권한이 부족합니다.',
    message: '해당 사용자는 권한이 부족합니다.',
    code: 'ERROR-0001'
  },
  'ERROR-0002': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 접근 불가',
    exampleDescription: 'AccessToken을 입력해주세요.',
    message: 'AccessToken을 입력해주세요.',
    code: 'ERROR-0002'
  },
  // 스로틀
  'ERROR-9999': {
    model: ThrottlerException,
    exampleTitle: 'Throttler - 과도한 요청',
    exampleDescription: 'ThrottlerException: Too Many Requests',
    message: 'ThrottlerException: Too Many Requests',
    code: 'ERROR-9999'
  },
  // 1000 : Animal Type
  'ERROR-1000': {
    model: BadRequestException,
    exampleTitle: 'Animal Type - 에러',
    exampleDescription: '동일한 반려 동물의 상세 이름이 존재합니다.',
    message: '동일한 반려 동물의 상세 이름이 존재합니다.',
    code: 'ERROR-1000'
  }
};