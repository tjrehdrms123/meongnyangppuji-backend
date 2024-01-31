"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const animal_entity_1 = require("./animal.entity");
const animal_controller_1 = require("./animal.controller");
const animal_service_1 = require("./animal.service");
const animal_repository_1 = require("./animal.repository");
const qr_module_1 = require("../qr/qr.module");
const animal_type_module_1 = require("../animal_type/animal_type.module");
const uplosds_module_1 = require("../uploads/uplosds.module");
let AnimalModule = class AnimalModule {
};
AnimalModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([animal_entity_1.AnimalEntity]),
            animal_type_module_1.AnimalTypeModule,
            qr_module_1.QrModule,
            uplosds_module_1.UploadsModule
        ],
        controllers: [animal_controller_1.AnimalController],
        providers: [animal_service_1.AnimalService, animal_repository_1.AnimalRepository],
        exports: [animal_repository_1.AnimalRepository]
    })
], AnimalModule);
exports.AnimalModule = AnimalModule;
//# sourceMappingURL=animal.module.js.map