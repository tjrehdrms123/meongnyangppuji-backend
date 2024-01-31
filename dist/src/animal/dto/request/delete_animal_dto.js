"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAnimalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_entity_1 = require("../../animal.entity");
class DeleteAnimalDto extends (0, swagger_1.PickType)(animal_entity_1.AnimalEntity, ['id']) {
}
exports.DeleteAnimalDto = DeleteAnimalDto;
//# sourceMappingURL=delete_animal_dto.js.map