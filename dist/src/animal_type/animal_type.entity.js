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
exports.AnimalTypeEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const common_entity_1 = require("../common/entities/common.entity");
const swagger_1 = require("@nestjs/swagger");
let AnimalTypeEntity = class AnimalTypeEntity extends common_entity_1.CommonEntity {
};
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', comment: '이름(강아지,고양이)', nullable: false, length: 30, charset: 'utf8mb4' }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '반려동물 이름을 선택해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '강아지',
        description: '반려 동물 종류 이름',
        required: true
    }),
    __metadata("design:type", String)
], AnimalTypeEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Index)({ unique: true }),
    (0, typeorm_1.Column)({ type: 'varchar', comment: '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)', nullable: false, length: 30, charset: 'utf8mb4' }),
    (0, class_validator_1.IsString)({ message: '문자로 입력해주세요.' }),
    (0, class_validator_1.IsNotEmpty)({ message: '반려동물 상세 이름을 입력해주세요.' }),
    (0, swagger_1.ApiProperty)({
        example: '진돗개',
        description: '반려 동물의 상세 이름',
        required: true
    }),
    __metadata("design:type", String)
], AnimalTypeEntity.prototype, "detail_name", void 0);
AnimalTypeEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'animal_type',
    })
], AnimalTypeEntity);
exports.AnimalTypeEntity = AnimalTypeEntity;
//# sourceMappingURL=animal_type.entity.js.map