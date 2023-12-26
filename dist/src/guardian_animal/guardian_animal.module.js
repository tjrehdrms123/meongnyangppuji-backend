"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianAnimalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const animal_module_1 = require("../animal/animal.module");
const guardian_module_1 = require("../guardian/guardian.module");
const guardian_animal_controller_1 = require("./controller/guardian_animal.controller");
const guardian_animal_entity_1 = require("./entities/guardian_animal.entity");
const guardian_animal_repository_1 = require("./infra/guardian_animal.repository");
const guardian_animal_service_1 = require("./service/guardian_animal.service");
let GuardianAnimalModule = class GuardianAnimalModule {
};
GuardianAnimalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([guardian_animal_entity_1.GuardianAnimalEntity]),
            guardian_module_1.GuardianModule,
            animal_module_1.AnimalModule
        ],
        controllers: [guardian_animal_controller_1.GuardianAnimalController],
        providers: [guardian_animal_service_1.GuardianAnimalService, guardian_animal_repository_1.GuardianAnimalRepository],
        exports: [guardian_animal_repository_1.GuardianAnimalRepository]
    })
], GuardianAnimalModule);
exports.GuardianAnimalModule = GuardianAnimalModule;
//# sourceMappingURL=guardian_animal.module.js.map