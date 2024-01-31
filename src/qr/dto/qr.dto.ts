import { PartialType } from '@nestjs/swagger'
import { QrEntity } from '../qr.entity'
import { AnimalEntity } from 'src/animal/animal.entity'

export class QrDto extends PartialType(QrEntity) {
    qr_issuance: boolean
    qr_use: boolean
    animal_id: AnimalEntity
}
