import { Module } from '@nestjs/common';
import { AnimalTypeController } from './controller/animal_type.controller';
import { AnimalTypeService } from './service/animal_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalEntity } from 'src/animal/entities/animal.entity';
import { AnimalTypeRepository } from './infra/animal_type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AnimalEntity])],
  providers: [{
    provide: 'AnimalTypeRepositoryInterface',
    useClass: AnimalTypeRepository,
  }],
  controllers: [AnimalTypeController]
})
export class AnimalTypeModule {}
