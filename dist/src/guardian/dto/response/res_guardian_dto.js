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
exports.ResGuardianRowDto = exports.ResGuardianMetaData = exports.ResGuardianDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const guardian_entity_1 = require("../../guardian.entity");
class ResGuardianDto extends (0, swagger_1.OmitType)(guardian_entity_1.GuardianEntity, []) {
}
exports.ResGuardianDto = ResGuardianDto;
exports.ResGuardianMetaData = {
    "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
    "createdAt": "2023-07-27T07:58:16.235Z",
    "updatedAt": "2023-07-27T07:58:16.235Z",
    "deletedAt": null,
    "name": "강길동",
    "phone_number": "010-1234-1234"
};
class ResGuardianRowDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    }),
    __metadata("design:type", Number)
], ResGuardianRowDto.prototype, "row", void 0);
exports.ResGuardianRowDto = ResGuardianRowDto;
//# sourceMappingURL=res_guardian_dto.js.map