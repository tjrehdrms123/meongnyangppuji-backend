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
exports.AnimalRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const animal_entity_1 = require("../entities/animal.entity");
let AnimalRepository = class AnimalRepository {
    constructor(AnimalRepository) {
        this.AnimalRepository = AnimalRepository;
    }
    async createAnimal(animalData) {
        return await this.AnimalRepository.save(animalData);
    }
    async updateAnimal(animalData) {
        const { id, name, introduction, age, sex, uploads_id, animal_type_id, qr_id, card_id } = animalData;
        const animal = await this.AnimalRepository.findOneBy({ id: id });
        animal.name = name;
        animal.introduction = introduction;
        animal.age = age;
        animal.sex = sex;
        animal.uploads_id = uploads_id;
        animal.animal_type_id = animal_type_id;
        animal.qr_id = qr_id;
        animal.card_id = card_id;
        return this.AnimalRepository.save(animal);
    }
    async deleteAnimal(animalData) {
        const { id } = animalData;
        const animal = await this.AnimalRepository.softDelete({ id: id });
        return animal;
    }
    async getAniaml(animalData) {
        const { id } = animalData;
        const animal = await this.AnimalRepository.find({
            where: {
                id: id
            },
            relations: ['animal_type_id', 'qr_id', 'card_id']
        });
        return animal;
    }
    async isExitsAnimal(animalId) {
        const animal = await this.AnimalRepository.findOneBy({ id: animalId });
        return animal;
    }
};
AnimalRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(animal_entity_1.AnimalEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AnimalRepository);
exports.AnimalRepository = AnimalRepository;
//# sourceMappingURL=animal.repository.js.map