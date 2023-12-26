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
var GuardianService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianService = void 0;
const common_1 = require("@nestjs/common");
const guardian_repository_1 = require("../infra/guardian.repository");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
let GuardianService = GuardianService_1 = class GuardianService {
    constructor(guardianRepository) {
        this.guardianRepository = guardianRepository;
        this.logger = new common_1.Logger(GuardianService_1.name);
    }
    async getGuardian(guardianData) {
        const { id } = guardianData;
        const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
        if (!exceptionExitsGuardian) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-2000']);
        }
        return await this.guardianRepository.getGuardian(guardianData);
    }
    async createGuardian(guardianData) {
        return await this.guardianRepository.createGuardian(guardianData);
    }
    async updateGuardian(guardianData) {
        const { id } = guardianData;
        const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
        if (!exceptionExitsGuardian) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-2000']);
        }
        return await this.guardianRepository.updateGuardian(guardianData);
    }
    async deleteGuardian(guardianData) {
        const { id } = guardianData;
        const exceptionExitsGuardian = await this.guardianRepository.isExitsGuardian(id);
        if (!exceptionExitsGuardian) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-2000']);
        }
        return await this.guardianRepository.deleteGuardian(guardianData);
    }
};
GuardianService = GuardianService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [guardian_repository_1.GuardianRepository])
], GuardianService);
exports.GuardianService = GuardianService;
//# sourceMappingURL=guardian.service.js.map