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
exports.QrController = void 0;
const common_1 = require("@nestjs/common");
const SuccessResponse_decorator_1 = require("../../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const swagger_1 = require("@nestjs/swagger");
const SuccessDefine_1 = require("../../common/define/SuccessDefine");
const qr_service_1 = require("../service/qr.service");
const create_qr_dto_1 = require("../dto/request/create_qr_dto");
const update_qr_dto_1 = require("../dto/request/update_qr_dto");
const delete_qr_dto_1 = require("../dto/request/delete_qr_dto");
const EnumDefine_1 = require("../../common/define/EnumDefine");
const roles_decorator_1 = require("../../common/decorators/roles.decorator");
const Roles_guard_1 = require("../../auth/guards/Roles.guard");
const jwt_guard_1 = require("../../users/guards/jwt.guard");
let QrController = class QrController {
    constructor(qrService) {
        this.qrService = qrService;
    }
    async createQr(qrData) {
        return await this.qrService.createQr(qrData);
    }
    async updateQr(qrData) {
        return await this.qrService.updateQr(qrData);
    }
    async deleteQr(QrDto) {
        return await this.qrService.deleteQr(QrDto);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'QR 생성', description: 'QR 생성' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-4000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_qr_dto_1.CreateQrDto]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "createQr", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'QR 수정', description: 'QR 수정' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-4001']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_qr_dto_1.UpdateQrDto]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "updateQr", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '[ ADMIN ] QR 삭제', description: 'QR 삭제' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-4002']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_qr_dto_1.DeleteQrDto]),
    __metadata("design:returntype", Promise)
], QrController.prototype, "deleteQr", null);
QrController = __decorate([
    (0, common_1.Controller)('qr'),
    (0, swagger_1.ApiTags)('qr API'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.UseGuards)(Roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [qr_service_1.QrService])
], QrController);
exports.QrController = QrController;
//# sourceMappingURL=qr.controller.js.map