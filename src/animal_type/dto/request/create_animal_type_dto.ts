import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity'

export class CreateAnimalTypeDto extends PickType(AnimalTypeEntity , ['name','detail_name'] as const) {
    name: string
    detail_name: string
}