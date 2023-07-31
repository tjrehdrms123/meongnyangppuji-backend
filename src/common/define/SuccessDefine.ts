import { ResAnimalTypeDetailNameDto, ResAnimalTypeDto, ResAnimalTypeManyRowDto, ResAnimalTypeNameDto } from 'src/animal_type/dto/response/res_animal_type_dto';
import { ResGuardianDto, ResGuardianMetaData } from 'src/guardian/dto/response/res_guardian_dto';
import { UsersEntity } from 'src/users/entities/users.entity';
import { SuccessResponseOption } from '../decorators/SuccessResponse.decorator';
type Keys =
  | 'SUCCESS-1000'
  | 'SUCCESS-1001'
  | 'SUCCESS-1002'
  | 'SUCCESS-1003'
  | 'SUCCESS-1004'
  | 'SUCCESS-2000'
  | 'SUCCESS-2001'
  | 'SUCCESS-3000'
  | 'SUCCESS-3001'
  | 'SUCCESS-3002'
  ;

export const SuccessDefine: Record<
  Keys,
  SuccessResponseOption
> = {
  // 1000 : AnimalType
  'SUCCESS-1000': {
    model: ResAnimalTypeDto,
    exampleTitle: '애완동물 타입 생성 성공 예시',
    exampleDescription: '애완동물 타입 생성 성공 예시',
  },
  'SUCCESS-1001': {
    model: ResAnimalTypeNameDto,
    exampleTitle: '애완동물 타입 종류 조회 예시',
    exampleDescription: '애완동물 타입 종류 조회 성공 예시',
  },
  'SUCCESS-1002': {
    model: ResAnimalTypeDetailNameDto,
    exampleTitle: '애완동물 상세 이름 조회 예시',
    exampleDescription: '애완동물 상세 이름 조회 성공 예시',
  },
  'SUCCESS-1003': {
    model: ResAnimalTypeDto,
    exampleTitle: '애완동물 타입 내용 변경 예시',
    exampleDescription: '애완동물 타입 내용 변경 성공 예시',
  },
  'SUCCESS-1004': {
    model: ResAnimalTypeManyRowDto,
    exampleTitle: '반려동물 이름으로 삭제 예시',
    exampleDescription: '반려동물 이름으로 삭제 성공 예시',
  },
  // 2000 : Guardian
  'SUCCESS-2000': {
    model: ResGuardianDto,
    exampleTitle: '보호자 생성 성공 예시',
    exampleDescription: '보호자 생성 성공 예시',
  },
  'SUCCESS-2001': {
    model: ResGuardianDto,
    exampleTitle: '보호자 업데이트 성공 예시',
    exampleDescription: '보호자 업데이트 성공 예시',
  },
  // 3000 : Users
  'SUCCESS-3000': {
    model: UsersEntity,
    exampleTitle: '유저 회원가입 성공 예시',
    exampleDescription: '유저 회원가입 성공 예시',
    overwriteValue: {
      guardian_id: ResGuardianMetaData
    }
  },
  'SUCCESS-3001': {
    model: UsersEntity,
    exampleTitle: '유저 조회 성공 예시',
    exampleDescription: '유저 조회 성공 예시',
    overwriteValue: {
      guardian_id: ResGuardianMetaData
    }
  },
  'SUCCESS-3002': {
    model: UsersEntity,
    exampleTitle: '유저 로그인 성공 예시',
    exampleDescription: '유저 로그인 성공 예시',
    overwriteValue: {
      guardian_id: ResGuardianMetaData
    }
  },
};