import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { AnimalTypeDto } from './animal_type_dto';
import { AnimalTypeEntity } from '../entities/animal_type.entity';

export class CreateAnimalTypeDto extends PickType(AnimalTypeEntity , ['name','detail_name'] as const) {
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