import { IsNotEmpty } from 'class-validator'
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity'
import { QrEntity } from 'src/qr/entities/qr.entity'

@Entity({
  name: 'animal',
})
export class AnimalEntity extends CommonEntity {

    @Column({ type: 'string', comment: '이름', nullable: false, charset: 'utf8mb4' })
    @IsNotEmpty({ message: '이름을 입력해주세요.' })
    @ApiProperty({
      example: '홍길동',
      description: '이름',
      required: true
    })
    name: string

    @Column({ type: 'string', comment: '소개', nullable: false, charset: 'utf8mb4' })
    @IsNotEmpty({ message: '소개를 입력해주세요.' })
    @ApiProperty({
      example: '멍냥이를 키우는 홍길동 입니다.',
      description: '소개',
      required: true
    })
    introduction: string

    @Column({ type: 'number', comment: '나이', nullable: false })
    @IsNotEmpty({ message: '나이를 입력해주세요.' })
    @ApiProperty({
      example: '22',
      description: '나이',
      required: true
    })
    age: number

    @Column({ type: 'boolean', comment: '성별', nullable: false })
    @IsNotEmpty({ message: '나이를 입력해주세요.' })
    @ApiProperty({
      example: '0',
      description: '나이',
      required: true
    })
    sex: boolean

    @Column({ type: 'string', comment: '프로빌 이미지', nullable: false })
    @IsNotEmpty({ message: '프로필 이미지를 선택해주세요.' })
    @ApiProperty({
      example: '프로필 이미지',
      description: '프로필 이미지',
      required: true
    })
    profile_img: string

    //* Relation */
    @OneToOne(() => AnimalTypeEntity, { eager: true })
    @JoinColumn({ name: 'animal_type_id', referencedColumnName: 'id' })
    animal_type_id: AnimalEntity

    @OneToOne(() => QrEntity, { eager: true })
    @JoinColumn({ name: 'qr_id', referencedColumnName: 'id' })
    qr_id: QrEntity
}
