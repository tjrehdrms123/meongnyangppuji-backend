import { ApiProperty, OmitType } from '@nestjs/swagger'
import { AnimalTypeEntity } from '../../entities/animal_type.entity';

export class ResAnimalTypeDto extends OmitType(AnimalTypeEntity , [] as const){}

export class ResAnimalTypeOmitNameDto extends OmitType(AnimalTypeEntity , ['detail_name'] as const){}

export class ResAnimalTypeOmitDetailNameDto extends OmitType(AnimalTypeEntity , ['name'] as const){}

export class ResAnimalTypeRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}

export class ResAnimalTypeManyRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}