"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const uplosds_entity_1 = require("../entities/uplosds.entity");
class UploadsDto extends (0, swagger_1.PickType)(uplosds_entity_1.UploadsEntity, ['img', 'img_crop']) {
}
exports.UploadsDto = UploadsDto;
//# sourceMappingURL=uploads.dto.js.map