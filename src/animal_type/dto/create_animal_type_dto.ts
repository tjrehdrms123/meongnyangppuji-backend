import { PartialType } from '@nestjs/swagger'
import { AnimalTypeDto } from './animal_type_dto';

export class CreateAnimalTypeDto extends PartialType(AnimalTypeDto) {}