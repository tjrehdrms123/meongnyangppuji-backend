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
  | 'ERROR-0003'
  | 'ERROR-0004'
  | 'ERROR-0005'
  | 'ERROR-0006'
  | 'ERROR-0007'
  | 'ERROR-0008'
  | 'ERROR-0009'
  | 'ERROR-9999'
  | 'ERROR-1000'
  | 'ERROR-1001'
  | 'ERROR-1002'
  | 'ERROR-2000'
  | 'ERROR-3000'
  | 'ERROR-3001'
  | 'ERROR-3002'
  | 'ERROR-3003'
  | 'ERROR-4000'
  | 'ERROR-5000'
  | 'ERROR-6000'
  | 'ERROR-6001'
  | 'ERROR-7000'
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
    exampleDescription: '로그인 후 이용해주세요.',
    message: '로그인 후 이용해주세요.',
    code: 'ERROR-0002'
  },
  'ERROR-0003': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 접근 불가',
    exampleDescription: '관리자만 접근 가능합니다.',
    message: '관리자만 접근 가능합니다.',
    code: 'ERROR-0003'
  },
  'ERROR-0004': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 유저 없음',
    exampleDescription: '해당 유저가 존재하지 않습니다.',
    message: '해당 유저가 존재하지 않습니다.',
    code: 'ERROR-0004'
  },
  'ERROR-0005': {
    model: BadRequestException,
    exampleTitle: 'BadRequest - ID 존재 하지 않음',
    exampleDescription: '해당 ID가 존재 하지 않습니다.',
    message: '해당 ID가 존재 하지 않습니다.',
    code: 'ERROR-0005'
  },
  'ERROR-0006': {
    model: ForbiddenException,
    exampleTitle: 'Forbidden - 권한 부족',
    exampleDescription: '해당 유저는 접근할 수 있는 권한 없습니다.',
    message: '해당 유저는 접근할 수 있는 권한 없습니다.',
    code: 'ERROR-0006'
  },
  'ERROR-0007': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 토근 에러',
    exampleDescription: '토근 기한이 만료 되었습니다.',
    message: '토근 기한이 만료 되었습니다.',
    code: 'ERROR-0007'
  },
  'ERROR-0008': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 토근 에러',
    exampleDescription: '잘못된 토큰 입니다.',
    message: '잘못된 토큰 입니다.',
    code: 'ERROR-0008'
  },
  'ERROR-0009': {
    model: UnauthorizedException,
    exampleTitle: 'Unauthorized - 잘못된 헤더',
    exampleDescription: '잘못된 헤더로 요청을 보냈습니다.',
    message: '잘못된 헤더로 요청을 보냈습니다.',
    code: 'ERROR-0009'
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
    exampleTitle: 'Animal Type - 1000',
    exampleDescription: '동일한 반려 동물의 상세 이름이 존재합니다.',
    message: '동일한 반려 동물의 상세 이름이 존재합니다.',
    code: 'ERROR-1000'
  },
  'ERROR-1001': {
    model: BadRequestException,
    exampleTitle: 'Animal Type - 1001',
    exampleDescription: '필수 값이 없어 반려동물의 종류 삭제가 불가능 합니다.',
    message: '필수 값이 없어 반려동물의 종류 삭제가 불가능 합니다.',
    code: 'ERROR-1001'
  },
  'ERROR-1002': {
    model: BadRequestException,
    exampleTitle: 'Animal Type - 1002',
    exampleDescription: '반려동물 타입이 존재하지 않습니다.',
    message: '반려동물 타입이 존재하지 않습니다.',
    code: 'ERROR-1002'
  },
  // 2000 : Guardian
  'ERROR-2000': {
    model: BadRequestException,
    exampleTitle: 'Guardian - 2000',
    exampleDescription: '해당 보호자가 존재하지 않습니다.',
    message: '해당 보호자가 존재하지 않습니다.',
    code: 'ERROR-2000'
  },
  // 3000 : Users
  'ERROR-3000': {
    model: BadRequestException,
    exampleTitle: 'Users - 3000',
    exampleDescription: '동일한 회원 이름이 존재합니다.',
    message: '동일한 회원 이름이 존재합니다.',
    code: 'ERROR-3000'
  },
  'ERROR-3001': {
    model: BadRequestException,
    exampleTitle: 'Users - 3001',
    exampleDescription: '회원이 존재하지 않습니다.',
    message: '회원이 존재하지 않습니다.',
    code: 'ERROR-3001'
  },
  'ERROR-3002': {
    model: BadRequestException,
    exampleTitle: 'Users - 3002',
    exampleDescription: '로그인에 실패했습니다.',
    message: '로그인에 실패했습니다.',
    code: 'ERROR-3002'
  },
  'ERROR-3003': {
    model: BadRequestException,
    exampleTitle: 'Users - 3003',
    exampleDescription: '동일한 보호자를 가진 계정이 존재합니다.',
    message: '동일한 보호자를 가진 계정이 존재합니다.',
    code: 'ERROR-3003'
  },
  // 4000 : Animal
  'ERROR-4000': {
    model: BadRequestException,
    exampleTitle: 'Animal - 4000',
    exampleDescription: '해당 반려동물이 존재하지 않습니다.',
    message: '해당 반려동물이 존재하지 않습니다.',
    code: 'ERROR-4000'
  },
  // 5000 : QR
  'ERROR-5000': {
    model: BadRequestException,
    exampleTitle: 'QR - 5000',
    exampleDescription: '해당 QR정보가 존재하지 않습니다.',
    message: '해당 QR정보가 존재하지 않습니다.',
    code: 'ERROR-5000'
  },
  // 6000 : Uploads
  'ERROR-6000': {
    model: BadRequestException,
    exampleTitle: 'Uploads - 6000',
    exampleDescription: '해당 프로필 이미지가 존재하지 않습니다.',
    message: '해당 프로필 이미지가 존재하지 않습니다.',
    code: 'ERROR-6000'
  },
  'ERROR-6001': {
    model: BadRequestException,
    exampleTitle: 'Uploads - 6001',
    exampleDescription: '프로필 이미지는 필수 값 입니다.',
    message: '프로필 이미지는 필수 값 입니다.',
    code: 'ERROR-6001'
  },
  // 7000 : Card
  'ERROR-7000': {
    model: BadRequestException,
    exampleTitle: 'Card - 7000',
    exampleDescription: '해당 카드 정보가 존재하지 않습니다.',
    message: '해당 카드 정보가 존재하지 않습니다.',
    code: 'ERROR-7000'
  },
};