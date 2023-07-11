import { Injectable } from '@nestjs/common';
import { AnimalTypeEntity } from '../entities/animal_type.entity';
import { AnimalTypeRepository } from '../infra/animal_type.repository';
import { AnimalTypeServiceInterface } from './animal_type.service.interface';


@Injectable()
export class AnimalTypeService implements AnimalTypeServiceInterface {
  constructor( readonly animalTypeRepository: AnimalTypeRepository<AnimalTypeEntity>) {}
}