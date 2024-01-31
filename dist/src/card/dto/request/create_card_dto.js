"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCardDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const card_entity_1 = require("../../card.entity");
class CreateCardDto extends (0, swagger_1.PickType)(card_entity_1.CardEntity, ['background_color', 'option']) {
}
exports.CreateCardDto = CreateCardDto;
//# sourceMappingURL=create_card_dto.js.map