import { Module } from '@nestjs/common';
import { AnimalTypeController } from './controller/animal_type.controller';
import { AnimalTypeService } from './service/animal_type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnimalTypeRepository } from './infra/animal_type.repository';
import { AnimalTypeEntity } from './entities/animal_type.entity';
import { UsersService } from 'src/users/service/Users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AnimalTypeEntity]),
  ],
  providers: [AnimalTypeRepository,AnimalTypeService],
  controllers: [AnimalTypeController],
  exports: [AnimalTypeRepository],
})
export class AnimalTypeModule {}
