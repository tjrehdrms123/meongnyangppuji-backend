import { CardService } from '../service/card.service';
import { CreateCardDto } from '../dto/request/create_card_dto';
import { UpdateCardDto } from '../dto/request/update_card_dto';
import { DeleteCardDto } from '../dto/request/delete_card_dto';
export declare class CardController {
    private readonly cardService;
    constructor(cardService: CardService);
    createCard(CardData: CreateCardDto): Promise<import("../entities/card.entity").CardEntity>;
    updateCard(CardData: UpdateCardDto): Promise<import("../entities/card.entity").CardEntity>;
    deleteCard(CardData: DeleteCardDto): Promise<any>;
}
