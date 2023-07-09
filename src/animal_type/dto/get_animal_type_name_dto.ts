import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class GetAnimalTypeNameDto extends PickType(AnimalTypeEntity, ['name'] as const) {
    @ApiProperty({
        example: '강아지',
        description: '이름(강아지,고양이)',
        required: true
    })
    name: string
}
