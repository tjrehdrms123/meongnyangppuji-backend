"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAnimalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_entity_1 = require("../../entities/animal.entity");
class GetAnimalDto extends (0, swagger_1.PickType)(animal_entity_1.AnimalEntity, ['id']) {
}
exports.GetAnimalDto = GetAnimalDto;
//# sourceMappingURL=get_animal_dto.js.map