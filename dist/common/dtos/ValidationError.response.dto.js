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
exports.ValidationErrorResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class ValidationErrorResponseDto {
    constructor(validationErrorInfo) {
        this.error = 'ValidationError';
        this.code = 'ValidationError';
        this.message = '검증오류';
        this.statusCode = 400;
        this.validationErrorInfo = validationErrorInfo;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '에러명',
        example: 'ValidationError'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ValidationErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '밸리데이션 에러는 코드도 ValidationError입니다.',
        example: 'ValidationError'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ValidationErrorResponseDto.prototype, "code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '에러메시지',
        example: '검증오류'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ValidationErrorResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: '400 검증오류 고정',
        example: 400
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ValidationErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: '필드 : [에러정보] 형식의 에러정보가 담긴 객체입니다.',
        example: { fieldName: ['errorinfoOfString'] }
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], ValidationErrorResponseDto.prototype, "validationErrorInfo", void 0);
exports.ValidationErrorResponseDto = ValidationErrorResponseDto;
//# sourceMappingURL=ValidationError.response.dto.js.map