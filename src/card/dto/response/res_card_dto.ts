import { ApiProperty, OmitType } from "@nestjs/swagger";
import { CardEntity } from "src/card/entities/card.entity";
export class ResCardDto extends OmitType(CardEntity , [] as const){}

export class ResCardRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}

export const ResCardMetaData = {
    "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
    "createdAt": "2023-07-27T07:58:16.235Z",
    "updatedAt": "2023-07-27T07:58:16.235Z",
    "deletedAt": null,
    "background_color": '#ededed',
    "option": 0,
    "card_id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000"
}