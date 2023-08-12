import { OmitType, PickType } from '@nestjs/swagger'
import { AnimalEntity } from 'src/animal/entities/animal.entity';

export class GetAnimalDto extends PickType(AnimalEntity , ['id'] as const) {}