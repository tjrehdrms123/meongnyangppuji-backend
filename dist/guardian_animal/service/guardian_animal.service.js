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
var GuardianAnimalService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianAnimalService = void 0;
const common_1 = require("@nestjs/common");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const guardian_animal_repository_1 = require("../infra/guardian_animal.repository");
const guardian_repository_1 = require("../../guardian/infra/guardian.repository");
const animal_repository_1 = require("../../animal/infra/animal.repository");
let GuardianAnimalService = GuardianAnimalService_1 = class GuardianAnimalService {
    constructor(guardianAnimalRepository, guardianRepository, animalRepository) {
        this.guardianAnimalRepository = guardianAnimalRepository;
        this.guardianRepository = guardianRepository;
        this.animalRepository = animalRepository;
        this.logger = new common_1.Logger(GuardianAnimalService_1.name);
    }
    async createGuardian(GuardianAnimalData) {
        const { guardian_id, animal_id } = GuardianAnimalData;
        const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(guardian_id);
        if (!exceptionExitsGuardian) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-2000']);
        }
        const exceptionExitsAnimal = await this.animalRepository.isExitsAnimal(animal_id);
        if (!exceptionExitsAnimal) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-4000']);
        }
        return await this.guardianAnimalRepository.createGuardian(GuardianAnimalData);
    }
    async getByIdGuardianAnimal(GuardianAnimalData) {
        const { id } = GuardianAnimalData;
        const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
        if (!exceptionExitsGuardian) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-2000']);
        }
        return await this.guardianAnimalRepository.getByIdGuardianAnimal(GuardianAnimalData);
    }
};
GuardianAnimalService = GuardianAnimalService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [guardian_animal_repository_1.GuardianAnimalRepository,
        guardian_repository_1.GuardianRepository,
        animal_repository_1.AnimalRepository])
], GuardianAnimalService);
exports.GuardianAnimalService = GuardianAnimalService;
//# sourceMappingURL=guardian_animal.service.js.map