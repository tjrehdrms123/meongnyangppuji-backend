import { OmitType, PickType } from '@nestjs/swagger'
import { QrEntity } from 'src/qr/entities/qr.entity';

export class CreateQrDto extends PickType(QrEntity , ['qr_issuance','qr_use','animal_id'] as const) {}