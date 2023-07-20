import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../../entities/animal_type.entity';

export class ResAnimalTypeNameDto extends PickType(AnimalTypeEntity , ['name'] as const) {
    name: string
}