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
var AnimalService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalService = void 0;
const common_1 = require("@nestjs/common");
const animal_repository_1 = require("../infra/animal.repository");
const animal_type_repository_1 = require("../../animal_type/infra/animal_type.repository");
const qr_repository_1 = require("../../qr/infra/qr.repository");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const uploads_repository_1 = require("../../uploads/infra/uploads.repository");
let AnimalService = AnimalService_1 = class AnimalService {
    constructor(animalRepository, animalTypeRepository, qrRepository, uploadsRepository) {
        this.animalRepository = animalRepository;
        this.animalTypeRepository = animalTypeRepository;
        this.qrRepository = qrRepository;
        this.uploadsRepository = uploadsRepository;
        this.logger = new common_1.Logger(AnimalService_1.name);
    }
    async createAnimal(animalData) {
        const { animal_type_id, qr_id, uploads_id, card_id } = animalData;
        const exceptionExitsAnimalType = this.animalTypeRepository.isExitsAnimalType(animal_type_id);
        if (!exceptionExitsAnimalType) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-1002']);
        }
        const exceptionExitsQr = this.qrRepository.isExitsQr(qr_id);
        if (!exceptionExitsQr) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-5000']);
        }
        const exceptionExitsImg = this.uploadsRepository.isExitsImg(uploads_id);
        if (!exceptionExitsImg) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-6000']);
        }
        const exceptionExitsCard = this.uploadsRepository.isExitsImg(card_id);
        if (!exceptionExitsCard) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-7000']);
        }
        return await this.animalRepository.createAnimal(animalData);
    }
    async updateAnimal(animalData) {
        const { animal_type_id, uploads_id, qr_id, card_id } = animalData;
        const exceptionExitsAnimalType = this.animalTypeRepository.isExitsAnimalType(animal_type_id);
        if (!exceptionExitsAnimalType) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-1002']);
        }
        const exceptionExitsQr = this.qrRepository.isExitsQr(qr_id);
        if (!exceptionExitsQr) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-5000']);
        }
        const exceptionExitsImg = this.uploadsRepository.isExitsImg(uploads_id);
        if (!exceptionExitsImg) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-6000']);
        }
        const exceptionExitsCard = this.uploadsRepository.isExitsImg(card_id);
        if (!exceptionExitsCard) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-7000']);
        }
        return await this.animalRepository.updateAnimal(animalData);
    }
    async deleteAnimal(animalData) {
        return await this.animalRepository.deleteAnimal(animalData);
    }
    async getAniaml(animalData) {
        const animal = this.animalRepository.getAniaml(animalData);
    }
    async getListAniaml(animalData) {
        return this.animalRepository.getListAnimal(animalData);
    }
};
AnimalService = AnimalService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [animal_repository_1.AnimalRepository,
        animal_type_repository_1.AnimalTypeRepository,
        qr_repository_1.QrRepository,
        uploads_repository_1.UploadsRepository])
], AnimalService);
exports.AnimalService = AnimalService;
//# sourceMappingURL=animal.service.js.map