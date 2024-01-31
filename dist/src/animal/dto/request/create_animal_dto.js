"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAnimalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const animal_entity_1 = require("../../animal.entity");
class CreateAnimalDto extends (0, swagger_1.PickType)(animal_entity_1.AnimalEntity, ['name', 'introduction', 'sex', 'uploads_id', 'animal_type_id', 'qr_id', 'card_id']) {
}
exports.CreateAnimalDto = CreateAnimalDto;
//# sourceMappingURL=create_animal_dto.js.map