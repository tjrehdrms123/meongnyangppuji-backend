import { ApiProperty, OmitType } from "@nestjs/swagger";
import { QrEntity } from "src/qr/entities/qr.entity";
export class ResUploadsDto extends OmitType(QrEntity , [] as const){}