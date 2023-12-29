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
exports.GetListAniamlDto = void 0;
const EnumDefine_1 = require("../../../common/define/EnumDefine");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class GetListAniamlDto {
}
__decorate([
    (0, class_validator_1.IsInt)({ message: '숫자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '옵션을 입력해주세요' }),
    __metadata("design:type", Number)
], GetListAniamlDto.prototype, "option", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '반려 동물 종류를 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '고양이',
        description: '반려 동물 종류',
        required: true
    }),
    __metadata("design:type", String)
], GetListAniamlDto.prototype, "type_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: '고양이',
        description: '반려 동물 종류',
        required: true
    }),
    __metadata("design:type", String)
], GetListAniamlDto.prototype, "sort_type", void 0);
exports.GetListAniamlDto = GetListAniamlDto;
//# sourceMappingURL=get_list_animal_dto.js.map