import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './controller/card.controller';
import { CardEntity } from './entities/card.entity';
import { CardRepository } from './infra/card.repository';
import { CardService } from './service/card.service';
@Module({
  imports: [
    TypeOrmModule.forFeature([CardEntity]),
  ],
  controllers: [CardController],
  providers: [CardService, CardRepository],
  exports: [CardRepository]
})
export class CardModule {}
