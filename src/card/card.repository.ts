import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CardEntity } from './card.entity';
import { CreateCardDto } from './dto/request/create_card_dto';
import { UpdateCardDto } from './dto/request/update_card_dto';
import { DeleteCardDto } from './dto/request/delete_card_dto';

@Injectable()
export class CardRepository {
    constructor(
        @InjectRepository(CardEntity)
        private readonly CardRepository: Repository<CardEntity>
    ){}

    /**
     * GET: Card 조회
     * @param CardData
     * @returns 등록된 Card 정보
     */
    async getCardId(option){
        return await this.CardRepository.findOne(
            { 
                select : ['id'],
                where : {option: option}
            }
        );
    }

    /**
     * GET: Card 조회
     * @param CardData
     * @returns 등록된 Card 정보
     */
    async getCardOption(){
        const card = await this.CardRepository.find();
        const cardOption = card.map((value) => value.option);
        return cardOption;
    }

    /**
     * POST: Card 등록
     * @param CardData
     * @returns 등록된 Card 정보
     */
    async createCard(CardData: CreateCardDto): Promise<CardEntity | null>{
        return await this.CardRepository.save(CardData);
    }

    /**
     * UPDATE: Card 정보 수정
     * @param CardData 
     * @returns 변경된 Card 정보
     */
    async updateCard(CardData: UpdateCardDto): Promise<CardEntity | null> {
        const { id, background_color, option } = CardData;
        const card = await this.CardRepository.findOneBy({ id: id });
        card.background_color = background_color;
        card.option = option;
        return this.CardRepository.save(CardData);
    }

    /**
     * DELETE: Card 삭제
     * @param CardData 
     * @returns 삭제된 Card의 Row
     */
    async deleteCard(CardData: DeleteCardDto): Promise<any> {
        const { id } = CardData;
        const card = await this.CardRepository.softDelete({ id: id });
        return card;
    }

    /**
     * ERROR-5000 등록된 Card이 있는지 확인
     * @param cardId Card ID
     * @returns 
     */
    async isExitsCard(cardId): Promise<CardEntity | null> {
        const card = await this.CardRepository.findOneBy({ id: cardId });
        return card;
    }
}