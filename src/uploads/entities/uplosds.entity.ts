import { IsNotEmpty, IsString } from 'class-validator'
import { Column, Entity } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'

@Entity({
  name: 'uploads',
})
export class UploadsEntity extends CommonEntity {

    @Column({ type: 'varchar', comment: '원본 이미지', nullable: false })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '이미지를 넣어주세요.' })
    @ApiProperty({
      example: 'https://s3.ap-northeast-2.amazonaws.com/test.png',
      description: '원본 이미지 S3 URL',
      required: true
    })
    img: string

    @Column({ type: 'varchar', comment: '크롭 이미지', nullable: true })
    @IsString({ message: '문자로 입력해주세요.' })
    @ApiProperty({
      example: 'https://s3.ap-northeast-2.amazonaws.com/test.png',
      description: '크롭된 이미지 S3 URL'
    })
    img_crop: string
}
