"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGuardianAnimalDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const guardian_animal_entity_1 = require("../../guardian_animal.entity");
class CreateGuardianAnimalDto extends (0, swagger_1.PickType)(guardian_animal_entity_1.GuardianAnimalEntity, ['guardian_id', 'animal_id']) {
}
exports.CreateGuardianAnimalDto = CreateGuardianAnimalDto;
//# sourceMappingURL=create_guardian_animal_dto.js.map