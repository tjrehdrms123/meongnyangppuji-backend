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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianAnimalEntity = void 0;
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../common/entities/common.entity");
const animal_entity_1 = require("../animal/animal.entity");
const guardian_entity_1 = require("../guardian/guardian.entity");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
let GuardianAnimalEntity = class GuardianAnimalEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, class_validator_1.IsUUID)(4, {
        message: "Guardian ID가 옳바르지 않습니다."
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Guardian ID를 입력해주세요.' }),
    (0, typeorm_1.JoinColumn)({ name: 'guardian_id', referencedColumnName: 'id' }),
    (0, typeorm_1.ManyToOne)(() => guardian_entity_1.GuardianEntity, { eager: true }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: '보호자 ID',
        required: true
    }),
    __metadata("design:type", guardian_entity_1.GuardianEntity)
], GuardianAnimalEntity.prototype, "guardian_id", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(4, {
        message: "Animal ID가 옳바르지 않습니다."
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Animal ID를 입력해주세요.' }),
    (0, typeorm_1.ManyToOne)(() => animal_entity_1.AnimalEntity, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'animal_id', referencedColumnName: 'id' }),
    (0, swagger_1.ApiProperty)({
        example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
        description: '반려견 ID',
        required: true
    }),
    __metadata("design:type", animal_entity_1.AnimalEntity)
], GuardianAnimalEntity.prototype, "animal_id", void 0);
GuardianAnimalEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'guardian_animal',
    })
], GuardianAnimalEntity);
exports.GuardianAnimalEntity = GuardianAnimalEntity;
//# sourceMappingURL=guardian_animal.entity.js.map