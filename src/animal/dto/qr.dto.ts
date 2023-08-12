import { PartialType } from '@nestjs/swagger'
import { QrEntity } from 'src/qr/entities/qr.entity'
import { AnimalEntity } from '../entities/animal.entity'

export class QrDto extends PartialType(QrEntity) {
    qr_issuance: boolean
    qr_use: boolean
    animal_id: AnimalEntity
}
