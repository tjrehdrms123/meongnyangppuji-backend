import { PickType } from '@nestjs/swagger'
import { QrEntity } from 'src/qr/entities/qr.entity'

export class DeleteQrDto extends PickType(QrEntity , ['id'] as const) {
    id: string
}