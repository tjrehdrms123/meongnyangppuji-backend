"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGuardianDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const guardian_entity_1 = require("../../guardian.entity");
class CreateGuardianDto extends (0, swagger_1.PickType)(guardian_entity_1.GuardianEntity, ['name', 'phone_number', 'users_id']) {
}
exports.CreateGuardianDto = CreateGuardianDto;
//# sourceMappingURL=create_guardian_dto.js.map