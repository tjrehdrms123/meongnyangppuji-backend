"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalTypeModule = void 0;
const common_1 = require("@nestjs/common");
const animal_type_controller_1 = require("./controller/animal_type.controller");
const animal_type_service_1 = require("./service/animal_type.service");
const typeorm_1 = require("@nestjs/typeorm");
const animal_type_repository_1 = require("./infra/animal_type.repository");
const animal_type_entity_1 = require("./entities/animal_type.entity");
let AnimalTypeModule = class AnimalTypeModule {
};
AnimalTypeModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([animal_type_entity_1.AnimalTypeEntity]),
        ],
        providers: [animal_type_repository_1.AnimalTypeRepository, animal_type_service_1.AnimalTypeService],
        controllers: [animal_type_controller_1.AnimalTypeController],
        exports: [animal_type_repository_1.AnimalTypeRepository],
    })
], AnimalTypeModule);
exports.AnimalTypeModule = AnimalTypeModule;
//# sourceMappingURL=animal_type.module.js.map