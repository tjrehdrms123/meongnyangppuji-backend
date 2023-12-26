"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const uploads_controller_1 = require("./controller/uploads.controller");
const uplosds_entity_1 = require("./entities/uplosds.entity");
const uploads_repository_1 = require("./infra/uploads.repository");
const aws_service_1 = require("./service/aws.service");
const uploads_service_1 = require("./service/uploads.service");
let UploadsModule = class UploadsModule {
};
UploadsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([uplosds_entity_1.UploadsEntity]),
        ],
        controllers: [uploads_controller_1.UploadsController],
        providers: [uploads_service_1.UploadsService, uploads_repository_1.UploadsRepository, aws_service_1.AwsService],
        exports: [uploads_repository_1.UploadsRepository]
    })
], UploadsModule);
exports.UploadsModule = UploadsModule;
//# sourceMappingURL=uplosds.module.js.map