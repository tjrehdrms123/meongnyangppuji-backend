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
exports.CommonEntity = void 0;
const typeorm_1 = require("typeorm");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
class CommonEntity {
    toJSON() {
        return (0, class_transformer_1.instanceToPlain)(this);
    }
}
__decorate([
    (0, class_validator_1.IsUUID)(4, {
        message: "입력한 ID가 옳바르지 않습니다."
    }),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        example: 'acd9c17d-56f5-42dc-8cbb-7808e080cab2',
        description: 'UUID',
        required: true
    }),
    __metadata("design:type", String)
], CommonEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'timestamp',
    }),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        example: '2023-07-13T06:28:32.525Z',
        description: '업데이트 일자',
        required: true,
        type: String
    }),
    __metadata("design:type", Date)
], CommonEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    (0, class_transformer_1.Expose)(),
    (0, swagger_1.ApiProperty)({
        example: '2023-07-13T06:28:32.525Z',
        description: '생성 일자',
        required: true,
        type: String
    }),
    __metadata("design:type", Date)
], CommonEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    (0, typeorm_1.DeleteDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], CommonEntity.prototype, "deletedAt", void 0);
exports.CommonEntity = CommonEntity;
//# sourceMappingURL=common.entity.js.map