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
exports.AnimalController = void 0;
const common_1 = require("@nestjs/common");
const SuccessResponse_decorator_1 = require("../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../common/define/ErrorDefine");
const swagger_1 = require("@nestjs/swagger");
const SuccessDefine_1 = require("../common/define/SuccessDefine");
const animal_service_1 = require("./animal.service");
const create_animal_dto_1 = require("./dto/request/create_animal_dto");
const get_animal_dto_1 = require("./dto/request/get_animal_dto");
const update_animal_dto_1 = require("./dto/request/update_animal_dto");
const delete_animal_dto_1 = require("./dto/request/delete_animal_dto");
const jwt_guard_1 = require("../users/guards/jwt.guard");
const get_list_animal_dto_1 = require("./dto/request/get_list_animal_dto");
let AnimalController = class AnimalController {
    constructor(animalService) {
        this.animalService = animalService;
    }
    async createAnimal(animalData) {
        return await this.animalService.createAnimal(animalData);
    }
    async updateAnimal(animalData) {
        return await this.animalService.updateAnimal(animalData);
    }
    async deleteAnimal(animalData) {
        return await this.animalService.deleteAnimal(animalData);
    }
    async getAnimal(animalData) {
        return await this.animalService.getAniaml(animalData);
    }
    async getListAnimal(animalData) {
        return await this.animalService.getListAniaml(animalData);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 생성', description: '반려동물 생성' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-5000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-1002'],
        ErrorDefine_1.ErrorDefine['ERROR-5000'],
        ErrorDefine_1.ErrorDefine['ERROR-6000'],
        ErrorDefine_1.ErrorDefine['ERROR-7000'],
    ]),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_animal_dto_1.CreateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "createAnimal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 정보 수정', description: '반려동물 정보 수정' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-5001']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-1002'],
        ErrorDefine_1.ErrorDefine['ERROR-5000'],
        ErrorDefine_1.ErrorDefine['ERROR-6000'],
        ErrorDefine_1.ErrorDefine['ERROR-7000'],
    ]),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_animal_dto_1.UpdateAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "updateAnimal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 삭제', description: '반려동물 삭제' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-5002']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_animal_dto_1.DeleteAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "deleteAnimal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 조회', description: '반려동물 조회' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-5003']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.UNAUTHORIZED, [
        ErrorDefine_1.ErrorDefine['ERROR-0001'],
        ErrorDefine_1.ErrorDefine['ERROR-0002'],
    ]),
    (0, common_1.Get)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_animal_dto_1.GetAnimalDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "getAnimal", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 목록 조회', description: '반려동물 목록 조회' }),
    (0, common_1.Get)('/list'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_list_animal_dto_1.GetListAniamlDto]),
    __metadata("design:returntype", Promise)
], AnimalController.prototype, "getListAnimal", null);
AnimalController = __decorate([
    (0, common_1.Controller)('animal'),
    (0, swagger_1.ApiTags)('animal API'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __metadata("design:paramtypes", [animal_service_1.AnimalService])
], AnimalController);
exports.AnimalController = AnimalController;
//# sourceMappingURL=animal.controller.js.map