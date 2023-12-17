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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardController = void 0;
const common_1 = require("@nestjs/common");
const SuccessResponse_decorator_1 = require("../../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const swagger_1 = require("@nestjs/swagger");
const SuccessDefine_1 = require("../../common/define/SuccessDefine");
const EnumDefine_1 = require("../../common/define/EnumDefine");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const Roles_guard_1 = require("../../auth/guards/Roles.guard");
const jwt_guard_1 = require("../../users/guards/jwt.guard");
const card_service_1 = require("../service/card.service");
const create_card_dto_1 = require("../dto/request/create_card_dto");
const update_card_dto_1 = require("../dto/request/update_card_dto");
const delete_card_dto_1 = require("../dto/request/delete_card_dto");
let CardController = class CardController {
    constructor(cardService) {
        this.cardService = cardService;
    }
    async createCard(CardData) {
        return await this.cardService.createCard(CardData);
    }
    async updateCard(CardData) {
        return await this.cardService.updateCard(CardData);
    }
    async deleteCard(CardData) {
        return await this.cardService.deleteCard(CardData);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Card 생성', description: 'Card 생성' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-7000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0007'],
        ErrorDefine_1.ErrorDefine['ERROR-0008'],
        ErrorDefine_1.ErrorDefine['ERROR-0009']
    ]),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_dto_1.CreateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "createCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Card 수정', description: 'Card 수정' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-7001']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0007'],
        ErrorDefine_1.ErrorDefine['ERROR-0008'],
        ErrorDefine_1.ErrorDefine['ERROR-0009']
    ]),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_card_dto_1.UpdateCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "updateCard", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '[ ADMIN ] Card 삭제', description: 'Card 삭제' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-7002']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0007'],
        ErrorDefine_1.ErrorDefine['ERROR-0008'],
        ErrorDefine_1.ErrorDefine['ERROR-0009']
    ]),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_card_dto_1.DeleteCardDto]),
    __metadata("design:returntype", Promise)
], CardController.prototype, "deleteCard", null);
CardController = __decorate([
    (0, common_1.Controller)('card'),
    (0, swagger_1.ApiTags)('card API'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseGuards)(Roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [card_service_1.CardService])
], CardController);
exports.CardController = CardController;
//# sourceMappingURL=card.controller.js.map