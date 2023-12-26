"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessDefine = void 0;
const res_animal_type_dto_1 = require("../../animal_type/dto/response/res_animal_type_dto");
const res_guardian_dto_1 = require("../../guardian/dto/response/res_guardian_dto");
const res_users_dto_1 = require("../../users/dto/response/res_users_dto");
const res_qr_dto_1 = require("../../qr/dto/response/res_qr_dto");
const res_animal_dto_1 = require("../../animal/dto/response/res_animal_dto");
const res_uploads_dto_1 = require("../../uploads/dto/response/res_uploads_dto");
const res_card_dto_1 = require("../../card/dto/response/res_card_dto");
exports.SuccessDefine = {
    'SUCCESS-1000': {
        model: res_animal_type_dto_1.ResAnimalTypeDto,
        exampleTitle: '반려동물 타입 생성 성공 예시',
        exampleDescription: '반려동물 타입 생성 성공 예시',
    },
    'SUCCESS-1001': {
        model: res_animal_type_dto_1.ResAnimalTypeNameDto,
        exampleTitle: '반려동물 타입 종류 조회 예시',
        exampleDescription: '반려동물 타입 종류 조회 성공 예시',
    },
    'SUCCESS-1002': {
        model: res_animal_type_dto_1.ResAnimalTypeDetailNameDto,
        exampleTitle: '반려동물 상세 이름 조회 예시',
        exampleDescription: '반려동물 상세 이름 조회 성공 예시',
    },
    'SUCCESS-1003': {
        model: res_animal_type_dto_1.ResAnimalTypeDto,
        exampleTitle: '반려동물 타입 내용 변경 예시',
        exampleDescription: '반려동물 타입 내용 변경 성공 예시',
    },
    'SUCCESS-1004': {
        model: res_animal_type_dto_1.ResAnimalTypeManyRowDto,
        exampleTitle: '반려동물 이름으로 삭제 예시',
        exampleDescription: '반려동물 이름으로 삭제 성공 예시',
    },
    'SUCCESS-2000': {
        model: res_guardian_dto_1.ResGuardianDto,
        exampleTitle: '보호자 생성 성공 예시',
        exampleDescription: '보호자 생성 성공 예시',
    },
    'SUCCESS-2001': {
        model: res_guardian_dto_1.ResGuardianDto,
        exampleTitle: '보호자 업데이트 성공 예시',
        exampleDescription: '보호자 업데이트 성공 예시',
    },
    'SUCCESS-2002': {
        model: res_guardian_dto_1.ResGuardianRowDto,
        exampleTitle: '보호자 삭제 성공 예시',
        exampleDescription: '보호자 삭제 성공 예시',
    },
    'SUCCESS-3000': {
        model: res_users_dto_1.ResUsersTypeDto,
        exampleTitle: '유저 회원가입 성공 예시',
        exampleDescription: '유저 회원가입 성공 예시',
        overwriteValue: {
            guardian_id: res_guardian_dto_1.ResGuardianMetaData
        }
    },
    'SUCCESS-3001': {
        model: res_users_dto_1.ResUsersTypeDto,
        exampleTitle: '유저 조회 성공 예시',
        exampleDescription: '유저 조회 성공 예시',
        overwriteValue: {
            guardian_id: res_guardian_dto_1.ResGuardianMetaData
        }
    },
    'SUCCESS-3002': {
        model: res_users_dto_1.ResUsersTypeDto,
        exampleTitle: '유저 로그인 성공 예시',
        exampleDescription: '유저 로그인 성공 예시',
        overwriteValue: {
            guardian_id: res_guardian_dto_1.ResGuardianMetaData
        }
    },
    'SUCCESS-4000': {
        model: res_qr_dto_1.ResQrDto,
        exampleTitle: 'QR 생성 성공 예시',
        exampleDescription: 'QR 생성 성공 예시'
    },
    'SUCCESS-4001': {
        model: res_qr_dto_1.ResQrDto,
        exampleTitle: 'QR 정보 수정 성공 예시',
        exampleDescription: 'QR 정보 수정 성공 예시'
    },
    'SUCCESS-4002': {
        model: res_qr_dto_1.ResQrRowDto,
        exampleTitle: 'QR 삭제 성공 예시',
        exampleDescription: 'QR 삭제 성공 예시'
    },
    'SUCCESS-5000': {
        model: res_animal_dto_1.ResAnimalDto,
        exampleTitle: '반려동물 생성 성공 예시',
        exampleDescription: '반려동물 생성 성공 예시'
    },
    'SUCCESS-5001': {
        model: res_animal_dto_1.ResAnimalDto,
        exampleTitle: '반려동물 정보 수정 성공 예시',
        exampleDescription: '반려동물 정보 수정 성공 예시'
    },
    'SUCCESS-5002': {
        model: res_animal_dto_1.ResAnimalRowDto,
        exampleTitle: '반려동물 삭제 성공 예시',
        exampleDescription: '반려동물 삭제 성공 예시'
    },
    'SUCCESS-5003': {
        model: res_animal_dto_1.ResAnimalRowDto,
        exampleTitle: '반려동물 조회 성공 예시',
        exampleDescription: '반려동물 조회 성공 예시',
        overwriteValue: {
            animal_type_id: res_animal_type_dto_1.ResAnimalTypeMetaData,
            qr_id: res_qr_dto_1.ResQrMetaData
        }
    },
    'SUCCESS-6000': {
        model: res_uploads_dto_1.ResUploadsDto,
        exampleTitle: '프로필 이미지 성공 예시',
        exampleDescription: '프로필 이미지 성공 예시'
    },
    'SUCCESS-7000': {
        model: res_card_dto_1.ResCardDto,
        exampleTitle: 'Card 생성 성공 예시',
        exampleDescription: 'Card 생성 성공 예시'
    },
    'SUCCESS-7001': {
        model: res_card_dto_1.ResCardDto,
        exampleTitle: 'Card 정보 수정 성공 예시',
        exampleDescription: 'Card 정보 수정 성공 예시'
    },
    'SUCCESS-7002': {
        model: res_card_dto_1.ResCardRowDto,
        exampleTitle: 'Card 삭제 성공 예시',
        exampleDescription: 'Card 삭제 성공 예시'
    },
};
//# sourceMappingURL=SuccessDefine.js.map