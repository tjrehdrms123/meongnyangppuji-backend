import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity'

export class GetAnimalTypeByDetailNameDto extends PickType(AnimalTypeEntity, ['name'] as const) {
    name: string
}
