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
exports.UsersEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const EnumDefine_1 = require("../../common/define/EnumDefine");
let UsersEntity = class UsersEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '유저 아이디', nullable: false, length: 10, charset: 'utf8mb4' }),
    (0, class_validator_1.IsNotEmpty)({ message: '유저의 아아디를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: 'develop',
        description: '유저 아아디',
        required: true
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '패스워드', nullable: false, charset: 'utf8mb4' }),
    (0, swagger_1.ApiProperty)({
        example: '1234',
        description: '유저의 패스워드',
        required: true
    }),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", String)
], UsersEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EnumDefine_1.Role, default: EnumDefine_1.Role.User }),
    (0, swagger_1.ApiProperty)({
        example: 'User',
        description: '유저 권한',
        enum: EnumDefine_1.Role,
    }),
    __metadata("design:type", String)
], UsersEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', comment: '서비스이용약관', nullable: false }),
    (0, class_validator_1.IsNotEmpty)({ message: '서비스이용약관을 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: true,
        description: '서비스이용약관',
        required: true
    }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "consent_check", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '개인정보처리방침', nullable: false }),
    (0, class_validator_1.IsNotEmpty)({ message: '개인정보처리방침을 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: true,
        description: '개인정보처리방침',
        required: true
    }),
    __metadata("design:type", Boolean)
], UsersEntity.prototype, "privacy_policy_check", void 0);
UsersEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'users',
    })
], UsersEntity);
exports.UsersEntity = UsersEntity;
//# sourceMappingURL=users.entity.js.map