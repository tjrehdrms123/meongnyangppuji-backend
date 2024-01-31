"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAnimalTypeByDetailNameDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../../animal_type.entity");
class UpdateAnimalTypeByDetailNameDto extends (0, swagger_1.PickType)(animal_type_entity_1.AnimalTypeEntity, ['id', 'detail_name']) {
}
exports.UpdateAnimalTypeByDetailNameDto = UpdateAnimalTypeByDetailNameDto;
//# sourceMappingURL=update_animal_type_by_detail_name_dto.js.map