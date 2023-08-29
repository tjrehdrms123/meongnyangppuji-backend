import { IsNotEmpty } from 'class-validator'
import { Column, Entity } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity({
  name: 'uploads',
})
export class UploadsEntity extends CommonEntity {

    @Column({ type: 'varchar', comment: '원본 이미지', nullable: false })
    @IsNotEmpty({ message: '이미지를 넣어주세요.' })
    @ApiProperty({
      example: 'https://s3.ap-northeast-2.amazonaws.com/test.png',
      description: 'QR 발행 여부 (0: 미발행, 1: 발행)',
      required: true
    })
    img: string

    @Column({ type: 'varchar', comment: '크롭 이미지', nullable: true })
    @ApiProperty({
      example: 'https://s3.ap-northeast-2.amazonaws.com/test.png',
      description: 'QR 사용 여부 (0: 미사용, 1: 사용)'
    })
    img_crop: string
}
