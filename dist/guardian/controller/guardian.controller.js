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
exports.GuardianController = void 0;
const common_1 = require("@nestjs/common");
const guardian_service_1 = require("../service/guardian.service");
const SuccessResponse_decorator_1 = require("../../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const create_guardian_dto_1 = require("../dto/request/create_guardian_dto");
const update_guardian_dto_1 = require("../dto/request/update_guardian_dto");
const swagger_1 = require("@nestjs/swagger");
const SuccessDefine_1 = require("../../common/define/SuccessDefine");
const delete_guardian_dto_1 = require("../dto/request/delete_guardian_dto");
const find_guardian_dto_1 = require("../dto/request/find_guardian_dto");
const jwt_guard_1 = require("../../users/guards/jwt.guard");
let GuardianController = class GuardianController {
    constructor(guardianService) {
        this.guardianService = guardianService;
    }
    async getGuardian(guardianData) {
        return await this.guardianService.getGuardian(guardianData);
    }
    async createGuardian(guardianData) {
        return await this.guardianService.createGuardian(guardianData);
    }
    async updateGuardian(guardianData) {
        return await this.guardianService.updateGuardian(guardianData);
    }
    async deleteGuardian(guardianData) {
        return await this.guardianService.deleteGuardian(guardianData);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '보호자 조회', description: '보호자 조회' }),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-2000'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_guardian_dto_1.FindGuardianDto]),
    __metadata("design:returntype", Promise)
], GuardianController.prototype, "getGuardian", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '보호자 생성', description: '보호자 생성' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-2000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guardian_dto_1.CreateGuardianDto]),
    __metadata("design:returntype", Promise)
], GuardianController.prototype, "createGuardian", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '보호자 수정', description: '보호자 수정' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-2001']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [ErrorDefine_1.ErrorDefine['ERROR-2000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-2000']
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_guardian_dto_1.UpdateGuardianDto]),
    __metadata("design:returntype", Promise)
], GuardianController.prototype, "updateGuardian", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '보호자 삭제', description: '보호자 삭제' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-2002']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [ErrorDefine_1.ErrorDefine['ERROR-2000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0006'],
        ErrorDefine_1.ErrorDefine['ERROR-2000']
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_guardian_dto_1.DeleteGuardianDto]),
    __metadata("design:returntype", Promise)
], GuardianController.prototype, "deleteGuardian", null);
GuardianController = __decorate([
    (0, common_1.Controller)('guardian'),
    (0, swagger_1.ApiTags)('guardian API'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [guardian_service_1.GuardianService])
], GuardianController);
exports.GuardianController = GuardianController;
//# sourceMappingURL=guardian.controller.js.map