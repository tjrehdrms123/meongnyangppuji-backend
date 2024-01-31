import { PickType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { QrEntity } from 'src/qr/qr.entity'

export class DeleteQrDto extends PickType(QrEntity , ['id'] as const) {
    @IsNotEmpty({ message: 'QR ID를 입력해주세요.' })
    id: string
}