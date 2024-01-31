"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnimalTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../../animal_type.entity");
class CreateAnimalTypeDto extends (0, swagger_1.PickType)(animal_type_entity_1.AnimalTypeEntity, ['name', 'detail_name']) {
}
exports.CreateAnimalTypeDto = CreateAnimalTypeDto;
//# sourceMappingURL=create_animal_type_dto.js.map