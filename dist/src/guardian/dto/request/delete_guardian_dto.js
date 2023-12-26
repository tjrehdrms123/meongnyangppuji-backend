"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteGuardianDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const guardian_entity_1 = require("../../entities/guardian.entity");
class DeleteGuardianDto extends (0, swagger_1.PickType)(guardian_entity_1.GuardianEntity, ['id']) {
}
exports.DeleteGuardianDto = DeleteGuardianDto;
//# sourceMappingURL=delete_guardian_dto.js.map