"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardianDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const guardian_entity_1 = require("../entities/guardian.entity");
class GuardianDto extends (0, swagger_1.PartialType)(guardian_entity_1.GuardianEntity) {
}
exports.GuardianDto = GuardianDto;
//# sourceMappingURL=guardian.dto.js.map