"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResUploadsDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const qr_entity_1 = require("../../../qr/entities/qr.entity");
class ResUploadsDto extends (0, swagger_1.OmitType)(qr_entity_1.QrEntity, []) {
}
exports.ResUploadsDto = ResUploadsDto;
//# sourceMappingURL=res_uploads_dto.js.map