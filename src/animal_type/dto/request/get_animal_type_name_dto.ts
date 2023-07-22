import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity'

export class GetAnimalTypeNameDto extends PickType(AnimalTypeEntity, ['name'] as const) {
    name: string
}