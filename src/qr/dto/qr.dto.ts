import { PartialType } from '@nestjs/swagger'
import { QrEntity } from '../entities/qr.entity'
import { AnimalEntity } from 'src/animal/entities/animal.entity'

export class QrDto extends PartialType(QrEntity) {
    qr_issuance: boolean
    qr_use: boolean
    animal_id: AnimalEntity
}
