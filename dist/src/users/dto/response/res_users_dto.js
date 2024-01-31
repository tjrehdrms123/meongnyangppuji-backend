"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResUsersOmitPasswordDto = exports.ResUsersTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../../users.entity");
class ResUsersTypeDto extends (0, swagger_1.OmitType)(users_entity_1.UsersEntity, []) {
}
exports.ResUsersTypeDto = ResUsersTypeDto;
class ResUsersOmitPasswordDto extends (0, swagger_1.OmitType)(users_entity_1.UsersEntity, ['password']) {
}
exports.ResUsersOmitPasswordDto = ResUsersOmitPasswordDto;
//# sourceMappingURL=res_users_dto.js.map