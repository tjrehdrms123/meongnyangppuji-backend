"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianModule = void 0;
const common_1 = require("@nestjs/common");
const guardian_controller_1 = require("./controller/guardian.controller");
const guardian_service_1 = require("./service/guardian.service");
const typeorm_1 = require("@nestjs/typeorm");
const guardian_entity_1 = require("./entities/guardian.entity");
const guardian_repository_1 = require("./infra/guardian.repository");
let GuardianModule = class GuardianModule {
};
GuardianModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([guardian_entity_1.GuardianEntity]),
        ],
        controllers: [guardian_controller_1.GuardianController],
        providers: [guardian_service_1.GuardianService, guardian_repository_1.GuardianRepository],
        exports: [guardian_repository_1.GuardianRepository]
    })
], GuardianModule);
exports.GuardianModule = GuardianModule;
//# sourceMappingURL=guardian.module.js.map