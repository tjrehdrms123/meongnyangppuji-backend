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
exports.GuardianRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const guardian_entity_1 = require("./guardian.entity");
let GuardianRepository = class GuardianRepository {
    constructor(GuardianRepository) {
        this.GuardianRepository = GuardianRepository;
    }
    async getGuardian(GuardianData) {
        const { id } = GuardianData;
        const guardian = await this.GuardianRepository.find({
            where: {
                id: id
            },
            relations: ['users_id']
        });
        return guardian[0];
    }
    async createGuardian(GuardianData) {
        return await this.GuardianRepository.save(GuardianData);
    }
    async updateGuardian(GuardianData) {
        const { id, name, phone_number } = GuardianData;
        const guardian = await this.GuardianRepository.findOneBy({ id: id });
        guardian.name = name;
        guardian.phone_number = phone_number;
        return this.GuardianRepository.save(GuardianData);
    }
    async isExitsGuardian(guardianId) {
        const guardian = await this.GuardianRepository.findOneBy({ id: guardianId });
        return guardian;
    }
    async deleteGuardian(GuardianData) {
        const { id } = GuardianData;
        const guardian = await this.GuardianRepository.softDelete({ id: id });
        return guardian;
    }
};
GuardianRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(guardian_entity_1.GuardianEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], GuardianRepository);
exports.GuardianRepository = GuardianRepository;
//# sourceMappingURL=guardian.repository.js.map