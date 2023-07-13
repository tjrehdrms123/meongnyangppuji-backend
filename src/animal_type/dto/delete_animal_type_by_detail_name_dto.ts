import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class DeleteAnimalTypeByDetailNameDto extends PickType(AnimalTypeEntity, ['detail_name'] as const) {
    detail_name: string
}
