"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const guardian_animal_entity_1 = require("../entities/guardian_animal.entity");
class GuardianDto extends (0, swagger_1.PartialType)(guardian_animal_entity_1.GuardianAnimalEntity) {
}
exports.GuardianDto = GuardianDto;
//# sourceMappingURL=guardian_animal.dto.js.map