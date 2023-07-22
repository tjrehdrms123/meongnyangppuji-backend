import { ApiProperty, OmitType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../../entities/animal_type.entity';

export class ResAnimalTypeDto extends OmitType(AnimalTypeEntity , [] as const){}

export class ResAnimalTypeOmitNameDto extends OmitType(AnimalTypeEntity , ['detail_name'] as const){}

export class ResAnimalTypeOmitDetailNameDto extends OmitType(AnimalTypeEntity , ['name'] as const){}
export class ResAnimalTypeNameDto {
    @ApiProperty({
        example: [
            "고양이",
            "강아지",
        ],
        description: '등록된 반려동물의 종류'
    })
    name: string;
}
export class ResAnimalTypeDetailNameDto {
    @ApiProperty({
        example: [
            "귀여운 고양이",
            "머진 고양이",
            "이뿌니 고양이",
            "나 화남 고양이"
        ],
        description: '등록된 반려동물의 상세 이름'
    })
    detail_name: string;
}

export class ResAnimalTypeRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}

export class ResAnimalTypeManyRowDto {
    @ApiProperty({
        example: 3,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}