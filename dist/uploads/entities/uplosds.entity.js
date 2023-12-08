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
exports.UploadsEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
let UploadsEntity = class UploadsEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '원본 이미지', nullable: false }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '이미지를 넣어주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: 'https://s3.ap-northeast-2.amazonaws.com/test.png',
        description: '원본 이미지 S3 URL',
        required: true
    }),
    __metadata("design:type", String)
], UploadsEntity.prototype, "img", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '크롭 이미지', nullable: true }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: 'https://s3.ap-northeast-2.amazonaws.com/test.png',
        description: '크롭된 이미지 S3 URL'
    }),
    __metadata("design:type", String)
], UploadsEntity.prototype, "img_crop", void 0);
UploadsEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'uploads',
    })
], UploadsEntity);
exports.UploadsEntity = UploadsEntity;
//# sourceMappingURL=uplosds.entity.js.map