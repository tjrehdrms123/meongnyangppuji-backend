"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnimalTypeNameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../../entities/animal_type.entity");
class GetAnimalTypeNameDto extends (0, swagger_1.PickType)(animal_type_entity_1.AnimalTypeEntity, ['name']) {
}
exports.GetAnimalTypeNameDto = GetAnimalTypeNameDto;
//# sourceMappingURL=get_animal_type_name_dto.js.map