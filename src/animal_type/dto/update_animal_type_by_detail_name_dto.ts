import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class UpdateAnimalTypeByDetailNameDto extends PickType(AnimalTypeEntity, ['id','detail_name'] as const) {
    id: string
    detail_name: string
}
