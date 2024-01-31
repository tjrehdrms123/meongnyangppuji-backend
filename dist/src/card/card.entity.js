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
exports.CardEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
let CardEntity = class CardEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '등록증 배경 색상', nullable: false }),
    (0, class_validator_1.IsString)({ message: 'String형식으로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '등록증 배경 색상을 선택해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '#ededed',
        description: '등록증 배경 색상',
        required: true
    }),
    __metadata("design:type", String)
], CardEntity.prototype, "background_color", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)', nullable: false }),
    (0, class_validator_1.IsInt)({ message: 'Int형식으로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '배경 레이아웃을 선택해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: 0,
        description: '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)',
        required: true
    }),
    __metadata("design:type", Number)
], CardEntity.prototype, "option", void 0);
CardEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'card',
    })
], CardEntity);
exports.CardEntity = CardEntity;
//# sourceMappingURL=card.entity.js.map