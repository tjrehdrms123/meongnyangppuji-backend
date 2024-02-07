import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateCardDto } from './dto/request/create_card_dto';
import { DeleteCardDto } from './dto/request/delete_card_dto';
import { UpdateCardDto } from './dto/request/update_card_dto';
import { CardEntity } from './card.entity';
import { CardRepository } from './card.repository';

@Injectable()
export class CardService {
  private readonly logger = new Logger(CardService.name);
  constructor(
    private readonly cardRepository: CardRepository,
  ) {}

  // GET: Card 조회
  async getCardId(option){
    return await this.cardRepository.getCardId(option);
  }

  // GET: Card 목록 조회
  async getCardOption(){
    return await this.cardRepository.getCardOption();
  }

  // POST: Card 등록
  async createCard(cardData: CreateCardDto): Promise<CardEntity | null> {
    return await this.cardRepository.createCard(cardData);
  }

  // UPDATE: Card 정보 수정
  async updateCard(cardData: UpdateCardDto): Promise<CardEntity | null> {
    return await this.cardRepository.updateCard(cardData);
  }

  // DELETE: Card 삭제
  async deleteCard(cardData: DeleteCardDto): Promise<any> {
    return await this.cardRepository.deleteCard(cardData);
  }
}
