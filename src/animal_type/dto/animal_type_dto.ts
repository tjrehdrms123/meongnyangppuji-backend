import { ApiProperty, PartialType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../animal_type.entity';

export class AnimalTypeDto extends PartialType(AnimalTypeEntity) {
    name: string
    detail_name: string
}
