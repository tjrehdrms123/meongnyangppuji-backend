
import { HttpStatus, Type } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type as transformerType } from 'class-transformer';

export class ErrorCommonResponse<T> {
  @ApiProperty({ type: Boolean, description: '성공여부' })
  @Expose()
  readonly success: boolean;

  @ApiProperty({ type: String, description: '에러 발생시간' })
  @Expose()
  readonly timestamp: Date;

  @ApiProperty({ type: String, description: '에러 발생 url' })
  @Expose()
  readonly path: string;

  @ApiProperty({ type: String, description: '에러 발생 메소드' })
  @Expose()
  readonly method: string;

  @ApiProperty({
    type: 'generic',
    description:
      'HttpExceptionErrorResponseDto,ValidationErrorResponseDto 두가지가 올수있습니다.'
  })
  @Expose()
  error: T;
}