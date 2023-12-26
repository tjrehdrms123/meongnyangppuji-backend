"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUsersDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const user_dto_1 = require("../user.dto");
class GetUsersDto extends (0, swagger_1.PickType)(user_dto_1.UsersDto, ['user_id']) {
}
exports.GetUsersDto = GetUsersDto;
//# sourceMappingURL=get_users_dto.js.map