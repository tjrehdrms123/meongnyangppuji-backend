import { ApiProperty, PickType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class UpdateAnimalTypeByDetailNameDto extends PickType(AnimalTypeEntity, ['id','detail_name'] as const) {
    @ApiProperty({
        example: 'ID',
        description: 'uuid',
        required: true
    })
    id: string

    @ApiProperty({
        example: '푸들',
        description: '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)',
        required: true
    })
    detail_name: string
}
