import { OmitType } from '@nestjs/swagger'
import { AnimalEntity } from 'src/animal/entities/animal.entity';

export class CreateAnimalDto extends OmitType(AnimalEntity , [] as const) {}