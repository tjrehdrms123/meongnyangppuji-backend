import { ApiProperty, OmitType } from "@nestjs/swagger";
import { AnimalEntity } from "src/animal/entities/animal.entity";
import { QrEntity } from "src/qr/entities/qr.entity";
export class ResAnimalDto extends OmitType(AnimalEntity , [] as const){}

export class ResAnimalRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}