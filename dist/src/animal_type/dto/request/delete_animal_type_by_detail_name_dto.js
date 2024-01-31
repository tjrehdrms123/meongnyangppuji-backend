"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnimalTypeByDetailNameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../../animal_type.entity");
class DeleteAnimalTypeByDetailNameDto extends (0, swagger_1.PickType)(animal_type_entity_1.AnimalTypeEntity, ['detail_name']) {
}
exports.DeleteAnimalTypeByDetailNameDto = DeleteAnimalTypeByDetailNameDto;
//# sourceMappingURL=delete_animal_type_by_detail_name_dto.js.map