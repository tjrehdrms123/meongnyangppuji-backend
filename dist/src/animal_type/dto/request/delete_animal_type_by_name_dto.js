"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnimalTypeNameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../../entities/animal_type.entity");
class DeleteAnimalTypeNameDto extends (0, swagger_1.PickType)(animal_type_entity_1.AnimalTypeEntity, ['name']) {
}
exports.DeleteAnimalTypeNameDto = DeleteAnimalTypeNameDto;
//# sourceMappingURL=delete_animal_type_by_name_dto.js.map