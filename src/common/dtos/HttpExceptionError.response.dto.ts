import { BadRequestException, HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { EnumToArray } from '../utils/enumNumberToArray';
import { HttpErrorNameEnum } from './error/HttpErrorNameEnum';

export class HttpExceptionErrorResponseDto {
  @ApiProperty({
    enum: HttpErrorNameEnum,
    description: '에러명'
  })
  @Expose()
  error: string;

  @ApiProperty({
    type: String,
    description: '에러메시지'
  })
  @Expose()
  message: any;

  @ApiProperty({
    enum: EnumToArray(HttpStatus),
    description: '상태코드 400~500번대만 봐주세용'
  })
  @Expose()
  statusCode: number;

  @ApiProperty({
    type: String,
    description: '에러코드가 넘어옵니다. 널값일 수 있습니다!!!',
    nullable: true
  })
  @Expose()
  code?: string;

  constructor(
    statusCode: number,
    error: string,
    message: any,
    code?: string
  ) {
    this.error = error;
    this.statusCode = statusCode;
    this.message = message;
    this.code = code;
  }
}