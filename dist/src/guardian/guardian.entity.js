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
exports.GuardianEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../users/users.entity");
let GuardianEntity = class GuardianEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '보호자 이름', nullable: false, length: 10, charset: 'utf8mb4' }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '보호자 이름을 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '홍길동',
        description: '반려동물 보호자 이름',
        required: true
    }),
    __metadata("design:type", String)
], GuardianEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '보호자 전화번호', nullable: false, length: 30, charset: 'utf8mb4' }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '보호자의 전화번호를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '010-1234-1234',
        description: '보호자 전화번호',
        required: true
    }),
    __metadata("design:type", String)
], GuardianEntity.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => users_entity_1.UsersEntity, { eager: true }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Users ID를 입력해주세요.' }),
    (0, typeorm_1.JoinColumn)({ name: 'users_id', referencedColumnName: 'id' }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: '유저 ID',
        required: true
    }),
    __metadata("design:type", users_entity_1.UsersEntity)
], GuardianEntity.prototype, "users_id", void 0);
GuardianEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'guardian',
    })
], GuardianEntity);
exports.GuardianEntity = GuardianEntity;
//# sourceMappingURL=guardian.entity.js.map