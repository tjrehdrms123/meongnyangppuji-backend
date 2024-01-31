import { IsBoolean, IsNotEmpty } from 'class-validator'
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'
import { AnimalEntity } from 'src/animal/animal.entity'

@Entity({
  name: 'qr',
})
export class QrEntity extends CommonEntity {

    @Column({ type: 'boolean', comment: 'QR 발행 여부 (0: 미발행, 1: 발행)', nullable: false })
    @IsBoolean({ message: 'Boolean형식으로 입력해주세요.' })
    @IsNotEmpty({ message: 'QR 발행 여부를 선택해주세요.' })
    @ApiProperty({
      example: '0',
      description: 'QR 발행 여부 (0: 미발행, 1: 발행)',
      required: true
    })
    qr_issuance: boolean

    @Column({ type: 'boolean', comment: 'QR 사용 여부 (0: 미사용, 1: 사용)', nullable: false })
    @IsBoolean({ message: 'Boolean형식으로 입력해주세요.' })
    @IsNotEmpty({ message: 'QR 사용 여부를 선택해주세요.' })
    @ApiProperty({
      example: '0',
      description: 'QR 사용 여부 (0: 미사용, 1: 사용)',
      required: true
    })
    qr_use: boolean

    //* Relation */
    // @OneToOne(() => AnimalEntity, { eager: true })
    // @JoinColumn({ name: 'animal_id', referencedColumnName: 'id' })
    // animal_id: AnimalEntity
}
