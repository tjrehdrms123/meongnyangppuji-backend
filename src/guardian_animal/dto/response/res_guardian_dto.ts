import { ApiProperty, OmitType } from "@nestjs/swagger";
import { GuardianEntity } from "src/guardian/entities/guardian.entity";

export class ResGuardianDto extends OmitType(GuardianEntity , [] as const){}

export const ResGuardianMetaData = {
  "id": "8cae3e4e-8ae0-4faf-a885-d1fb591af000",
  "createdAt": "2023-07-27T07:58:16.235Z",
  "updatedAt": "2023-07-27T07:58:16.235Z",
  "deletedAt": null,
  "name": "강길동",
  "phone_number": "010-1234-1234"
}

export class ResGuardianRowDto {
    @ApiProperty({
        example: 1,
        description: 'SoftDelete를 통해 삭제된 행'
    })
    row: number;
}