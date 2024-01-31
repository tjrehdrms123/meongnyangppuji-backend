import { IsNotEmpty, IsString, Length, max, validate } from 'class-validator'
import { Column, Entity, Index } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { Exclude } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

@Entity({
  name: 'animal_type',
})
export class AnimalTypeEntity extends CommonEntity {

    @Column({ type: 'varchar', comment: '이름(강아지,고양이)', nullable: false, length: 30, charset: 'utf8mb4' })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '반려동물 이름을 선택해주세요.' })
    @ApiProperty({
      example: '강아지',
      description: '반려 동물 종류 이름',
      required: true
    })
    name: string

    @Index({ unique: true })
    @Column({ type: 'varchar', comment: '상세 이름 (푸들, 진돗개, 코리안 숏헤어...)', nullable: false, length: 30, charset: 'utf8mb4' })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '반려동물 상세 이름을 입력해주세요.' })
    @ApiProperty({
      example: '진돗개',
      description: '반려 동물의 상세 이름',
      required: true
    })
    detail_name: string
}