"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_type_entity_1 = require("../animal_type.entity");
class AnimalTypeDto extends (0, swagger_1.PartialType)(animal_type_entity_1.AnimalTypeEntity) {
}
exports.AnimalTypeDto = AnimalTypeDto;
//# sourceMappingURL=animal_type_dto.js.map