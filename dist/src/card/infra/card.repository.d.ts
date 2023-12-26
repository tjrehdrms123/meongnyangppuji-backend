import { Repository } from 'typeorm';
import { CardEntity } from '../entities/card.entity';
import { CreateCardDto } from '../dto/request/create_card_dto';
import { UpdateCardDto } from '../dto/request/update_card_dto';
import { DeleteCardDto } from '../dto/request/delete_card_dto';
export declare class CardRepository {
    private readonly CardRepository;
    constructor(CardRepository: Repository<CardEntity>);
    createCard(CardData: CreateCardDto): Promise<CardEntity | null>;
    updateCard(CardData: UpdateCardDto): Promise<CardEntity | null>;
    deleteCard(CardData: DeleteCardDto): Promise<any>;
    isExitsCard(cardId: any): Promise<CardEntity | null>;
}
