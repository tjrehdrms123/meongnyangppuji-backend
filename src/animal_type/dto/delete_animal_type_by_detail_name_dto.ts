import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class DeleteAnimalTypeByDetailNameDto extends PickType(AnimalTypeEntity, ['detail_name'] as const) {
    @ApiProperty({
        example: '푸들',
        description: '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)',
        required: true
    })
    detail_name: string
}
