import {  IsNotEmpty } from 'class-validator'
import { Column, Entity } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'

@Entity({
  name: 'qr',
})
export class QrEntity extends CommonEntity {
    @Column({ name: 'qr_issuance', type: 'boolean', default: true, comment: 'QR 발행 여부', nullable: false })
    @IsNotEmpty({ message: 'QR 발행 여부를 선택해주세요.' })
    qrIssuance: boolean

    @Column({ name: 'qr_use', type: 'boolean', default: true, comment: 'QR 사용 여부', nullable: false, charset: 'utf8mb4' })
    @IsNotEmpty({ message: 'QR 사용 여부를 선택해주세요.' })
    qrUse: boolean
}
