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
exports.GuardianAnimalController = void 0;
const common_1 = require("@nestjs/common");
const SuccessResponse_decorator_1 = require("../../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const swagger_1 = require("@nestjs/swagger");
const SuccessDefine_1 = require("../../common/define/SuccessDefine");
const guardian_animal_service_1 = require("../service/guardian_animal.service");
const create_guardian_animal_dto_1 = require("../dto/request/create_guardian_animal_dto");
const find_guardian_dto_1 = require("../dto/request/find_guardian_dto");
const jwt_guard_1 = require("../../users/guards/jwt.guard");
let GuardianAnimalController = class GuardianAnimalController {
    constructor(guardianAnimalService) {
        this.guardianAnimalService = guardianAnimalService;
    }
    async createGuardian(guardianAnimalData) {
        return await this.guardianAnimalService.createGuardian(guardianAnimalData);
    }
    async getByIdGuardianAnimal(guardianAnimalData) {
        return await this.guardianAnimalService.getByIdGuardianAnimal(guardianAnimalData);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '보호자/반려동물 연결 데이터 생성', description: '보호자/반려동물 연결 데이터 생성' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-2000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-2000'],
        ErrorDefine_1.ErrorDefine['ERROR-4000'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_guardian_animal_dto_1.CreateGuardianAnimalDto]),
    __metadata("design:returntype", Promise)
], GuardianAnimalController.prototype, "createGuardian", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '보호자/반려동물 데이터 조회', description: '보호자/반려동물 데이터 조회' }),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-2000']
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [find_guardian_dto_1.FindGuardianAnimalDto]),
    __metadata("design:returntype", Promise)
], GuardianAnimalController.prototype, "getByIdGuardianAnimal", null);
GuardianAnimalController = __decorate([
    (0, common_1.Controller)('guardian_animal'),
    (0, swagger_1.ApiTags)('guardian_animal API'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [guardian_animal_service_1.GuardianAnimalService])
], GuardianAnimalController);
exports.GuardianAnimalController = GuardianAnimalController;
//# sourceMappingURL=guardian_animal.controller.js.map