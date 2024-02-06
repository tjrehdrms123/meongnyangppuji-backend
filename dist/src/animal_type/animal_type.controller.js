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
exports.AnimalTypeController = void 0;
const common_1 = require("@nestjs/common");
const animal_type_service_1 = require("./animal_type.service");
const create_animal_type_dto_1 = require("./dto/request/create_animal_type_dto");
const swagger_1 = require("@nestjs/swagger");
const SuccessResponse_decorator_1 = require("../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../common/define/ErrorDefine");
const update_animal_type_by_detail_name_dto_1 = require("./dto/request/update_animal_type_by_detail_name_dto");
const delete_animal_type_by_detail_name_dto_1 = require("./dto/request/delete_animal_type_by_detail_name_dto");
const delete_animal_type_by_name_dto_1 = require("./dto/request/delete_animal_type_by_name_dto");
const SuccessDefine_1 = require("../common/define/SuccessDefine");
const jwt_guard_1 = require("../users/guards/jwt.guard");
const Roles_guard_1 = require("../auth/guards/Roles.guard");
const roles_decorator_1 = require("../common/decorators/roles.decorator");
const EnumDefine_1 = require("../common/define/EnumDefine");
const NoAuth_guard_1 = require("../auth/guards/NoAuth.guard");
let AnimalTypeController = class AnimalTypeController {
    constructor(animalTypeService) {
        this.animalTypeService = animalTypeService;
    }
    async createAnimalType(animalTypeData) {
        return await this.animalTypeService.createAnimalType(animalTypeData);
    }
    async getAnimalTypeId(detail_name) {
        return await this.animalTypeService.getAnimalTypeId(detail_name);
    }
    async getAnimalTypeName() {
        return await this.animalTypeService.getAnimalTypeName();
    }
    async getAnimalTypeByDetailName(name) {
        return await this.animalTypeService.getAnimalTypeByDetailName({ name });
    }
    async updateAnimalTypeByDetailName(animalTypeData) {
        return await this.animalTypeService.updateAnimalTypeByDetailName(animalTypeData);
    }
    async deleteAnimalTypeByDetailName(animalTypeData) {
        return await this.animalTypeService.deleteAnimalTypeByDetailName(animalTypeData);
    }
    async deleteAnimalByName(animalTypeData) {
        return await this.animalTypeService.deleteAnimalByName(animalTypeData);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '[ ADMIN ] 반려동물 타입 생성', description: '반려동물 타입 생성' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-1000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [ErrorDefine_1.ErrorDefine['ERROR-1000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.FORBIDDEN, [
        ErrorDefine_1.ErrorDefine['ERROR-0006']
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_type_dto_1.CreateAnimalTypeDto]),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "createAnimalType", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 조회', description: '반려동물 조회' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-1001']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0006'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('detail_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "getAnimalTypeId", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 타입 종류 조회', description: '반려동물 타입 종류 조회' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-1001']]),
    (0, NoAuth_guard_1.NoAuth)(),
    (0, common_1.Get)('name'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "getAnimalTypeName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 타입 상세 이름 조회', description: '반려동물 타입 상세 이름 조회' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-1002']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-1000'],
        ErrorDefine_1.ErrorDefine['ERROR-0005']
    ]),
    (0, NoAuth_guard_1.NoAuth)(),
    (0, common_1.Get)('detail_name'),
    __param(0, (0, common_1.Query)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "getAnimalTypeByDetailName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 타입 내용 변경', description: '반려동물 타입 내용 변경' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, []),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0006'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_animal_type_by_detail_name_dto_1.UpdateAnimalTypeByDetailNameDto]),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "updateAnimalTypeByDetailName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '[ ADMIN ] 반려동물 상세 이름으로 삭제', description: '반려동물 상세 이름으로 삭제' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-1003']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0006'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('detail_name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_animal_type_by_detail_name_dto_1.DeleteAnimalTypeByDetailNameDto]),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "deleteAnimalTypeByDetailName", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '[ ADMIN ] 반려동물 이름으로 삭제', description: '반려동물 이름으로 삭제' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-1004']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
        ErrorDefine_1.ErrorDefine['ERROR-0006'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    (0, roles_decorator_1.Roles)(EnumDefine_1.Role.Admin),
    (0, common_1.Delete)('name'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_animal_type_by_name_dto_1.DeleteAnimalTypeNameDto]),
    __metadata("design:returntype", Promise)
], AnimalTypeController.prototype, "deleteAnimalByName", null);
AnimalTypeController = __decorate([
    (0, common_1.Controller)('animal_type'),
    (0, swagger_1.ApiTags)('animal_type API'),
    (0, common_1.UseGuards)(Roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [animal_type_service_1.AnimalTypeService])
], AnimalTypeController);
exports.AnimalTypeController = AnimalTypeController;
//# sourceMappingURL=animal_type.controller.js.map