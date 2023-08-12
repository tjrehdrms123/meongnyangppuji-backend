import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from './entities/animal.entity';
import { AnimalController } from './controller/animal.controller';
import { AnimalService } from './service/animal.service';
import { AnimalRepository } from './infra/animal.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalEntity]),
  ],
  controllers: [AnimalController],
  providers: [AnimalService, AnimalRepository],
  exports: [AnimalRepository]
})
export class GuardianModule {}
