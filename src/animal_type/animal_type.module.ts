import { Module } from '@nestjs/common';
import { AnimalTypeController } from './animal_type.controller';
import { AnimalTypeService } from './animal_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalTypeRepository } from './animal_type.repository';
import { AnimalTypeEntity } from './animal_type.entity';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalTypeEntity]),
  ],
  providers: [AnimalTypeRepository,AnimalTypeService],
  controllers: [AnimalTypeController],
  exports: [AnimalTypeRepository],
})
export class AnimalTypeModule {}
