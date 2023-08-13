import { OmitType } from '@nestjs/swagger'
import { QrEntity } from 'src/qr/entities/qr.entity';

export class CreateQrDto extends OmitType(QrEntity , [] as const) {}