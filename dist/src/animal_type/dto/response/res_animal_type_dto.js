"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResAnimalTypeMetaData = exports.ResAnimalTypeManyRowDto = exports.ResAnimalTypeRowDto = exports.ResAnimalTypeDetailNameDto = exports.ResAnimalTypeNameDto = exports.ResAnimalTypeOmitDetailNameDto = exports.ResAnimalTypeOmitNameDto = exports.ResAnimalTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../../animal_type.entity");
class ResAnimalTypeDto extends (0, swagger_1.OmitType)(animal_type_entity_1.AnimalTypeEntity, []) {
}
exports.ResAnimalTypeDto = ResAnimalTypeDto;
class ResAnimalTypeOmitNameDto extends (0, swagger_1.OmitType)(animal_type_entity_1.AnimalTypeEntity, ['detail_name']) {
}
exports.ResAnimalTypeOmitNameDto = ResAnimalTypeOmitNameDto;
class ResAnimalTypeOmitDetailNameDto extends (0, swagger_1.OmitType)(animal_type_entity_1.AnimalTypeEntity, ['name']) {
}
exports.ResAnimalTypeOmitDetailNameDto = ResAnimalTypeOmitDetailNameDto;
class ResAnimalTypeNameDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            "고양이",
            "강아지",
        ],
        description: '등록된 반려동물의 종류'
    }),
    __metadata("design:type", String)
], ResAnimalTypeNameDto.prototype, "name", void 0);
exports.ResAnimalTypeNameDto = ResAnimalTypeNameDto;
class ResAnimalTypeDetailNameDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: [
            "귀여운 고양이",
            "머진 고양이",
            "이뿌니 고양이",
            "나 화남 고양이"
        ],
        description: '등록된 반려동물의 상세 이름'
    }),
    __metadata("design:type", String)
], ResAnimalTypeDetailNameDto.prototype, "detail_name", void 0);
exports.ResAnimalTypeDetailNameDto = ResAnimalTypeDetailNameDto;
class ResAnimalTypeRowDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    }),
    __metadata("design:type", Number)
], ResAnimalTypeRowDto.prototype, "row", void 0);
exports.ResAnimalTypeRowDto = ResAnimalTypeRowDto;
class ResAnimalTypeManyRowDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 3,
        description: 'SoftDelete를 통해 삭제된 행'
    }),
    __metadata("design:type", Number)
], ResAnimalTypeManyRowDto.prototype, "row", void 0);
exports.ResAnimalTypeManyRowDto = ResAnimalTypeManyRowDto;
exports.ResAnimalTypeMetaData = {
    "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
    "createdAt": "2023-07-27T07:58:16.235Z",
    "updatedAt": "2023-07-27T07:58:16.235Z",
    "deletedAt": null,
    "name": "강아지",
    "detail_name": "진돗개"
};
//# sourceMappingURL=res_animal_type_dto.js.map