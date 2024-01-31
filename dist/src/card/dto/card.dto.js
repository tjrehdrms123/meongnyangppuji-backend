"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const card_entity_1 = require("../card.entity");
class CardDto extends (0, swagger_1.PartialType)(card_entity_1.CardEntity) {
}
exports.CardDto = CardDto;
//# sourceMappingURL=card.dto.js.map