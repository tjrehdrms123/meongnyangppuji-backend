import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../../entities/animal_type.entity';

export class ResAnimalTypeDto extends PickType(AnimalTypeEntity , ['name','detail_name'] as const) {
    name: string
    detail_name: string
}