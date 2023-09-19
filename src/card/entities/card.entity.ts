import { IsInt, IsNotEmpty, IsString } from 'class-validator'
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'
import { AnimalEntity } from 'src/animal/entities/animal.entity'

@Entity({
  name: 'card',
})
export class CardEntity extends CommonEntity {

    @Column({ type: 'varchar', comment: '등록증 배경 색상', nullable: false })
    @IsString({ message: 'String형식으로 입력해주세요.' })
    @IsNotEmpty({ message: '등록증 배경 색상을 선택해주세요.' })
    @ApiProperty({
      example: '#ededed',
      description: '등록증 배경 색상',
      required: true
    })
    background_color: string

    @Column({ type: 'int', comment: '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)', nullable: false })
    @IsInt({ message: 'Int형식으로 입력해주세요.' })
    @IsNotEmpty({ message: '배경 레이아웃을 선택해주세요.' })
    @ApiProperty({
      example: 0,
      description: '배경 레이아웃 (0: 기본, 1: 옵션1, 2: 옵션2...)',
      required: true
    })
    option: number
}
