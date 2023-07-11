import { Module } from '@nestjs/common';
import { AnimalTypeController } from './controller/animal_type.controller';
import { AnimalTypeService } from './service/animal_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalTypeRepository } from './infra/animal_type.repository';
import { AnimalTypeEntity } from './entities/animal_type.entity';
import { TypeOrmCustomModule } from 'src/typeorm-custom.module';

@Module({
  imports: [
    TypeOrmCustomModule.forCustomRepository([AnimalTypeRepository])
  ],
  providers: [AnimalTypeService],
  controllers: [AnimalTypeController],
  exports: [AnimalTypeService],
})
export class AnimalTypeModule {}
