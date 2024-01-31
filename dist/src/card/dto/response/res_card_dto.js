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
exports.ResCardMetaData = exports.ResCardRowDto = exports.ResCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const card_entity_1 = require("../../card.entity");
class ResCardDto extends (0, swagger_1.OmitType)(card_entity_1.CardEntity, []) {
}
exports.ResCardDto = ResCardDto;
class ResCardRowDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    }),
    __metadata("design:type", Number)
], ResCardRowDto.prototype, "row", void 0);
exports.ResCardRowDto = ResCardRowDto;
exports.ResCardMetaData = {
    "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
    "createdAt": "2023-07-27T07:58:16.235Z",
    "updatedAt": "2023-07-27T07:58:16.235Z",
    "deletedAt": null,
    "background_color": '#ededed',
    "option": 0,
    "card_id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000"
};
//# sourceMappingURL=res_card_dto.js.map