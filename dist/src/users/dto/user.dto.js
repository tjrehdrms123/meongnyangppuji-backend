"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_entity_1 = require("../entities/users.entity");
class UsersDto extends (0, swagger_1.OmitType)(users_entity_1.UsersEntity, ['password']) {
}
exports.UsersDto = UsersDto;
//# sourceMappingURL=user.dto.js.map