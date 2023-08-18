import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from './entities/animal.entity';
import { AnimalController } from './controller/animal.controller';
import { AnimalService } from './service/animal.service';
import { AnimalRepository } from './infra/animal.repository';
import { QrModule } from 'src/qr/qr.module';
import { AnimalTypeModule } from 'src/animal_type/animal_type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalEntity]),
    AnimalTypeModule,
    QrModule
  ],
  controllers: [AnimalController],
  providers: [AnimalService, AnimalRepository],
  exports: [AnimalRepository]
})
export class AnimalModule {}
