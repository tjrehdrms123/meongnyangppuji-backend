import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { CreateCardDto } from '../dto/request/create_card_dto';
import { DeleteCardDto } from '../dto/request/delete_card_dto';
import { UpdateCardDto } from '../dto/request/update_card_dto';
import { CardEntity } from '../entities/card.entity';
import { CardRepository } from '../infra/card.repository';

@Injectable()
export class CardService {
  private readonly logger = new Logger(CardService.name);
  constructor(
    private readonly cardRepository: CardRepository,
  ) {}

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
