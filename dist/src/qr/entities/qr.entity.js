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
exports.QrEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
let QrEntity = class QrEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', comment: 'QR 발행 여부 (0: 미발행, 1: 발행)', nullable: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Boolean형식으로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'QR 발행 여부를 선택해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '0',
        description: 'QR 발행 여부 (0: 미발행, 1: 발행)',
        required: true
    }),
    __metadata("design:type", Boolean)
], QrEntity.prototype, "qr_issuance", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean', comment: 'QR 사용 여부 (0: 미사용, 1: 사용)', nullable: false }),
    (0, class_validator_1.IsBoolean)({ message: 'Boolean형식으로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'QR 사용 여부를 선택해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '0',
        description: 'QR 사용 여부 (0: 미사용, 1: 사용)',
        required: true
    }),
    __metadata("design:type", Boolean)
], QrEntity.prototype, "qr_use", void 0);
QrEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'qr',
    })
], QrEntity);
exports.QrEntity = QrEntity;
//# sourceMappingURL=qr.entity.js.map