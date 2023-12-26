import { CreateCardDto } from '../dto/request/create_card_dto';
import { DeleteCardDto } from '../dto/request/delete_card_dto';
import { UpdateCardDto } from '../dto/request/update_card_dto';
import { CardEntity } from '../entities/card.entity';
import { CardRepository } from '../infra/card.repository';
export declare class CardService {
    private readonly cardRepository;
    private readonly logger;
    constructor(cardRepository: CardRepository);
    createCard(cardData: CreateCardDto): Promise<CardEntity | null>;
    updateCard(cardData: UpdateCardDto): Promise<CardEntity | null>;
    deleteCard(cardData: DeleteCardDto): Promise<any>;
}
