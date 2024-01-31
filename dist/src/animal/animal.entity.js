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
exports.AnimalEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../animal_type/animal_type.entity");
const qr_entity_1 = require("../qr/qr.entity");
const uplosds_entity_1 = require("../uploads/entities/uplosds.entity");
const card_entity_1 = require("../card/card.entity");
let AnimalEntity = class AnimalEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '이름', nullable: false, charset: 'utf8mb4' }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '이름을 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '홍길동',
        description: '이름',
        required: true
    }),
    __metadata("design:type", String)
], AnimalEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '소개', nullable: false, charset: 'utf8mb4' }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '소개를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '멍냥이를 키우는 홍길동 입니다.',
        description: '소개',
        required: true
    }),
    __metadata("design:type", String)
], AnimalEntity.prototype, "introduction", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '나이', nullable: false }),
    (0, class_validator_1.IsInt)({ message: '숫자로 입력해주세요.' }),
    (0, class_validator_1.Max)(120, { message: '120이하로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '나이를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '22',
        description: '나이',
        required: true
    }),
    __metadata("design:type", Number)
], AnimalEntity.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', comment: '성별', nullable: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Boolean형식으로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '나이를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '0',
        description: '나이',
        required: true
    }),
    __metadata("design:type", Boolean)
], AnimalEntity.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '좋아요', default: 0 }),
    (0, swagger_1.ApiProperty)({
        example: '0',
        description: '좋아요',
        required: true
    }),
    __metadata("design:type", Number)
], AnimalEntity.prototype, "like", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '조회수', default: 0 }),
    (0, swagger_1.ApiProperty)({
        example: '0',
        description: '조회수',
        required: true
    }),
    __metadata("design:type", Number)
], AnimalEntity.prototype, "read", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => uplosds_entity_1.UploadsEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'uploads_id', referencedColumnName: 'id' }),
    (0, class_validator_1.IsUUID)(4, {
        message: "입력한 프로필 ID가 옳바르지 않습니다."
    }),
    (0, class_validator_1.IsNotEmpty)({ message: '프로필을 넣어주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: 'Profile Image ID',
        required: true
    }),
    __metadata("design:type", uplosds_entity_1.UploadsEntity)
], AnimalEntity.prototype, "uploads_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => animal_type_entity_1.AnimalTypeEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'animal_type_id', referencedColumnName: 'id' }),
    (0, class_validator_1.IsUUID)(4, {
        message: "입력한 Animal Type ID가 옳바르지 않습니다."
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Animal Type ID를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: '반려견 종류 ID',
        required: true
    }),
    __metadata("design:type", animal_type_entity_1.AnimalTypeEntity)
], AnimalEntity.prototype, "animal_type_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => qr_entity_1.QrEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'qr_id', referencedColumnName: 'id' }),
    (0, class_validator_1.IsUUID)(4, {
        message: "입력한 QR ID가 옳바르지 않습니다."
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'QR ID를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: 'QR ID',
        required: true
    }),
    __metadata("design:type", qr_entity_1.QrEntity)
], AnimalEntity.prototype, "qr_id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => card_entity_1.CardEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'card_id', referencedColumnName: 'id' }),
    (0, class_validator_1.IsUUID)(4, {
        message: "입력한 Card ID가 옳바르지 않습니다."
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Card ID를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: 'Card ID',
        required: true
    }),
    __metadata("design:type", card_entity_1.CardEntity)
], AnimalEntity.prototype, "card_id", void 0);
AnimalEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'animal',
    })
], AnimalEntity);
exports.AnimalEntity = AnimalEntity;
//# sourceMappingURL=animal.entity.js.map