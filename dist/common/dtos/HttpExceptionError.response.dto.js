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
exports.HttpExceptionErrorResponseDto = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const enumNumberToArray_1 = require("../utils/enumNumberToArray");
const HttpErrorNameEnum_1 = require("./error/HttpErrorNameEnum");
class HttpExceptionErrorResponseDto {
    constructor(statusCode, error, message, code) {
        this.error = error;
        this.statusCode = statusCode;
        this.message = message;
        this.code = code;
    }
}
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: HttpErrorNameEnum_1.HttpErrorNameEnum,
        description: '에러명'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], HttpExceptionErrorResponseDto.prototype, "error", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '에러메시지'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Object)
], HttpExceptionErrorResponseDto.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: (0, enumNumberToArray_1.EnumToArray)(common_1.HttpStatus),
        description: '상태코드 400~500번대만 봐주세용'
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", Number)
], HttpExceptionErrorResponseDto.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: '에러코드가 넘어옵니다. 널값일 수 있습니다!!!',
        nullable: true
    }),
    (0, class_transformer_1.Expose)(),
    __metadata("design:type", String)
], HttpExceptionErrorResponseDto.prototype, "code", void 0);
exports.HttpExceptionErrorResponseDto = HttpExceptionErrorResponseDto;
//# sourceMappingURL=HttpExceptionError.response.dto.js.map