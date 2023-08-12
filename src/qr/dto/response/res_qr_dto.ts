import { ApiProperty, OmitType } from "@nestjs/swagger";
import { QrEntity } from "src/qr/entities/qr.entity";
export class ResQrDto extends OmitType(QrEntity , [] as const){}

export class ResQrRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}

export const ResQrMetaData = {
    "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
    "createdAt": "2023-07-27T07:58:16.235Z",
    "updatedAt": "2023-07-27T07:58:16.235Z",
    "deletedAt": null,
    "qr_issuance": 0,
    "qr_use": 0,
    "animal_id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000"
}