"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateQrDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const qr_entity_1 = require("../../entities/qr.entity");
class CreateQrDto extends (0, swagger_1.PickType)(qr_entity_1.QrEntity, ['qr_issuance', 'qr_use']) {
}
exports.CreateQrDto = CreateQrDto;
//# sourceMappingURL=create_qr_dto.js.map