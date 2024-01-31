import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './card.controller';
import { CardEntity } from './card.entity';
import { CardRepository } from './card.repository';
import { CardService } from './card.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity]),
  ],
  controllers: [CardController],
  providers: [CardService, CardRepository],
  exports: [CardRepository]
})
export class CardModule {}
