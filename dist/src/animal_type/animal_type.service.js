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
var AnimalTypeService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalTypeService = void 0;
const common_1 = require("@nestjs/common");
const animal_type_repository_1 = require("./animal_type.repository");
const ErrorDefine_1 = require("../common/define/ErrorDefine");
let AnimalTypeService = AnimalTypeService_1 = class AnimalTypeService {
    constructor(animalTypeRepository) {
        this.animalTypeRepository = animalTypeRepository;
        this.logger = new common_1.Logger(AnimalTypeService_1.name);
    }
    async getAnimalTypeName() {
        return await this.animalTypeRepository.getAnimalTypeName();
    }
    async getAnimalTypeByDetailName(animalTypeData) {
        return await this.animalTypeRepository.getAnimalTypeByDetailName(animalTypeData);
    }
    async createAnimalType(animalTypeData) {
        const { detail_name } = animalTypeData;
        const exceptionExitsAnimalType = await this.animalTypeRepository.findOneByDetailName(detail_name);
        if (exceptionExitsAnimalType) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-1000']);
        }
        const newAnimalType = await this.animalTypeRepository.createAnimalType(animalTypeData);
        return newAnimalType;
    }
    async updateAnimalTypeByDetailName(animalTypeData) {
        const { id, detail_name } = animalTypeData;
        const exceptionNotFoundRow = await this.animalTypeRepository.isExitsAnimalType(id);
        if (!exceptionNotFoundRow) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-1002']);
        }
        const exceptionExitsAnimalType = await this.animalTypeRepository.findOneByDetailName(detail_name);
        if (exceptionExitsAnimalType) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-1000']);
        }
        return await this.animalTypeRepository.updateAnimalTypeByDetailName(animalTypeData);
    }
    async deleteAnimalTypeByDetailName(animalTypeData) {
        return await this.animalTypeRepository.deleteAnimalTypeByDetailName(animalTypeData);
    }
    async deleteAnimalByName(animalTypeData) {
        return await this.animalTypeRepository.deleteAnimalByName(animalTypeData);
    }
};
AnimalTypeService = AnimalTypeService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [animal_type_repository_1.AnimalTypeRepository])
], AnimalTypeService);
exports.AnimalTypeService = AnimalTypeService;
//# sourceMappingURL=animal_type.service.js.map