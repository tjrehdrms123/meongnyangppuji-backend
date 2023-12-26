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
exports.CreateUsersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../user.dto");
const class_validator_1 = require("class-validator");
class CreateUsersDto extends (0, swagger_1.PickType)(user_dto_1.UsersDto, ['user_id', 'consent_check', 'privacy_policy_check']) {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: '비밀번호를 작성해주세요.' }),
    __metadata("design:type", String)
], CreateUsersDto.prototype, "password", void 0);
exports.CreateUsersDto = CreateUsersDto;
//# sourceMappingURL=create_users_dto.js.map