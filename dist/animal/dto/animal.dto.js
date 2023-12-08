"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const qr_entity_1 = require("../../qr/entities/qr.entity");
class QrDto extends (0, swagger_1.PartialType)(qr_entity_1.QrEntity) {
}
exports.QrDto = QrDto;
//# sourceMappingURL=animal.dto.js.map