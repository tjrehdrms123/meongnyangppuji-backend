import { ResAnimalTypeDetailNameDto, ResAnimalTypeDto, ResAnimalTypeIdDto, ResAnimalTypeManyRowDto, ResAnimalTypeMetaData, ResAnimalTypeNameDto } from 'src/animal_type/dto/response/res_animal_type_dto';
import { ResGuardianDto, ResGuardianMetaData, ResGuardianRowDto } from 'src/guardian/dto/response/res_guardian_dto';
import { SuccessResponseOption } from '../decorators/SuccessResponse.decorator';
import { ResUsersTypeDto } from 'src/users/dto/response/res_users_dto';
import { ResQrDto, ResQrMetaData, ResQrRowDto } from 'src/qr/dto/response/res_qr_dto';
import { ResAnimalDto, ResAnimalRowDto } from 'src/animal/dto/response/res_animal_dto';
import { ResUploadsDto } from 'src/uploads/dto/response/res_uploads_dto';
import { ResCardDto, ResCardRowDto } from 'src/card/dto/response/res_card_dto';
type Keys =
  | 'SUCCESS-1000'
  | 'SUCCESS-1001'
  | 'SUCCESS-1002'
  | 'SUCCESS-1003'
  | 'SUCCESS-1004'
  | 'SUCCESS-1005'
  | 'SUCCESS-2000'
  | 'SUCCESS-2001'
  | 'SUCCESS-2002'
  | 'SUCCESS-3000'
  | 'SUCCESS-3001'
  | 'SUCCESS-3002'
  | 'SUCCESS-4000'
  | 'SUCCESS-4001'
  | 'SUCCESS-4002'
  | 'SUCCESS-5000'
  | 'SUCCESS-5001'
  | 'SUCCESS-5002'
  | 'SUCCESS-5003'
  | 'SUCCESS-6000'
  | 'SUCCESS-7000'
  | 'SUCCESS-7001'
  | 'SUCCESS-7002'
  | 'SUCCESS-7003'
  ;

export const SuccessDefine: Record<
  Keys,
  SuccessResponseOption
> = {
  // 1000 : AnimalType
  'SUCCESS-1000': {
    model: ResAnimalTypeDto,
    exampleTitle: '반려동물 타입 생성 성공 예시',
    exampleDescription: '반려동물 타입 생성 성공 예시',
  },
  'SUCCESS-1001': {
    model: ResAnimalTypeNameDto,
    exampleTitle: '반려동물 타입 종류 조회 예시',
    exampleDescription: '반려동물 타입 종류 조회 성공 예시',
  },
  'SUCCESS-1002': {
    model: ResAnimalTypeDetailNameDto,
    exampleTitle: '반려동물 상세 이름 조회 예시',
    exampleDescription: '반려동물 상세 이름 조회 성공 예시',
  },
  'SUCCESS-1003': {
    model: ResAnimalTypeDto,
    exampleTitle: '반려동물 타입 내용 변경 예시',
    exampleDescription: '반려동물 타입 내용 변경 성공 예시',
  },
  'SUCCESS-1004': {
    model: ResAnimalTypeManyRowDto,
    exampleTitle: '반려동물 이름으로 삭제 예시',
    exampleDescription: '반려동물 이름으로 삭제 성공 예시',
  },
  'SUCCESS-1005': {
    model: ResAnimalTypeIdDto,
    exampleTitle: '반려동물 이름으로 조회 예시',
    exampleDescription: '반려동물 이름으로 조회 성공 예시',
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
  'SUCCESS-2002': {
    model: ResGuardianRowDto,
    exampleTitle: '보호자 삭제 성공 예시',
    exampleDescription: '보호자 삭제 성공 예시',
  },
  // 3000 : Users
  'SUCCESS-3000': {
    model: ResUsersTypeDto,
    exampleTitle: '유저 회원가입 성공 예시',
    exampleDescription: '유저 회원가입 성공 예시',
    overwriteValue: {
      guardian_id: ResGuardianMetaData
    }
  },
  'SUCCESS-3001': {
    model: ResUsersTypeDto,
    exampleTitle: '유저 조회 성공 예시',
    exampleDescription: '유저 조회 성공 예시',
    overwriteValue: {
      guardian_id: ResGuardianMetaData
    }
  },
  'SUCCESS-3002': {
    model: ResUsersTypeDto,
    exampleTitle: '유저 로그인 성공 예시',
    exampleDescription: '유저 로그인 성공 예시',
    overwriteValue: {
      guardian_id: ResGuardianMetaData
    }
  },
  // 4000 : QR
  'SUCCESS-4000': {
    model: ResQrDto,
    exampleTitle: 'QR 생성 성공 예시',
    exampleDescription: 'QR 생성 성공 예시'
  },
  'SUCCESS-4001': {
    model: ResQrDto,
    exampleTitle: 'QR 정보 수정 성공 예시',
    exampleDescription: 'QR 정보 수정 성공 예시'
  },
  'SUCCESS-4002': {
    model: ResQrRowDto,
    exampleTitle: 'QR 삭제 성공 예시',
    exampleDescription: 'QR 삭제 성공 예시'
  },
  // 5000 : Animal
  'SUCCESS-5000': {
    model: ResAnimalDto,
    exampleTitle: '반려동물 생성 성공 예시',
    exampleDescription: '반려동물 생성 성공 예시'
  },
  'SUCCESS-5001': {
    model: ResAnimalDto,
    exampleTitle: '반려동물 정보 수정 성공 예시',
    exampleDescription: '반려동물 정보 수정 성공 예시'
  },
  'SUCCESS-5002': {
    model: ResAnimalRowDto,
    exampleTitle: '반려동물 삭제 성공 예시',
    exampleDescription: '반려동물 삭제 성공 예시'
  },
  'SUCCESS-5003': {
    model: ResAnimalRowDto,
    exampleTitle: '반려동물 조회 성공 예시',
    exampleDescription: '반려동물 조회 성공 예시',
    overwriteValue: {
      animal_type_id: ResAnimalTypeMetaData,
      qr_id: ResQrMetaData
    }
  },
  // 6000 : Uploads
  'SUCCESS-6000': {
    model: ResUploadsDto,
    exampleTitle: '프로필 이미지 성공 예시',
    exampleDescription: '프로필 이미지 성공 예시'
  },
  // 7000 : Card
  'SUCCESS-7000': {
    model: ResCardDto,
    exampleTitle: 'Card 생성 성공 예시',
    exampleDescription: 'Card 생성 성공 예시'
  },
  'SUCCESS-7001': {
    model: ResCardDto,
    exampleTitle: 'Card 정보 수정 성공 예시',
    exampleDescription: 'Card 정보 수정 성공 예시'
  },
  'SUCCESS-7002': {
    model: ResCardRowDto,
    exampleTitle: 'Card 삭제 성공 예시',
    exampleDescription: 'Card 삭제 성공 예시'
  },
  'SUCCESS-7003': {
    model: ResCardDto,
    exampleTitle: 'Card 조회 성공 예시',
    exampleDescription: 'Card 조회 성공 예시'
  },
};