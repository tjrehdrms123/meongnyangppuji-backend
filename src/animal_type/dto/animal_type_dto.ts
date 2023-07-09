import { ApiProperty, PartialType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class AnimalTypeDto extends PartialType(AnimalTypeEntity) {
    @ApiProperty({
        example: '강아지',
        description: '이름(강아지,고양이)',
        required: true
    })
    name: string

    @ApiProperty({
        example: '푸들',
        description: '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)',
        required: true
    })
    detail_name: string
}
