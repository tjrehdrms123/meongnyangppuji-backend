import { IsBoolean, IsInt, IsNotEmpty, IsString, IsUUID, Max } from 'class-validator'
import { Column, Entity, JoinColumn, OneToOne, ManyToOne, OneToMany } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'
import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity'
import { QrEntity } from 'src/qr/qr.entity'
import { UploadsEntity } from 'src/uploads/entities/uplosds.entity'
import { CardEntity } from 'src/card/card.entity'

@Entity({
  name: 'animal',
})
export class AnimalEntity extends CommonEntity {

    @Column({ type: 'varchar', comment: '이름', nullable: false, charset: 'utf8mb4' })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '이름을 입력해주세요.' })
    @ApiProperty({
      example: '홍길동',
      description: '이름',
      required: true
    })
    name: string

    @Column({ type: 'varchar', comment: '소개', nullable: false, charset: 'utf8mb4' })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '소개를 입력해주세요.' })
    @ApiProperty({
      example: '멍냥이를 키우는 홍길동 입니다.',
      description: '소개',
      required: true
    })
    introduction: string

    @Column({ type: 'int', comment: '나이', nullable: false })
    @IsInt({ message: '숫자로 입력해주세요.' })
    @Max(120, { message: '120이하로 입력해주세요.' })
    @IsNotEmpty({ message: '나이를 입력해주세요.' })
    @ApiProperty({
      example: '22',
      description: '나이',
      required: true
    })
    age: number

    @Column({ type: 'boolean', comment: '성별', nullable: false })
    @IsBoolean({ message: 'Boolean형식으로 입력해주세요.' })
    @IsNotEmpty({ message: '나이를 입력해주세요.' })
    @ApiProperty({
      example: '0',
      description: '나이',
      required: true
    })
    sex: boolean

    @Column({ type: 'int', comment: '좋아요', default: 0 })
    @ApiProperty({
      example: '0',
      description: '좋아요',
      required: true
    })
    like: number


    @Column({ type: 'int', comment: '조회수', default: 0 })
    @ApiProperty({
      example: '0',
      description: '조회수',
      required: true
    })
    read: number

    //* Relation */
    @OneToOne(() => UploadsEntity, { eager: true })
    @JoinColumn({ name: 'uploads_id', referencedColumnName: 'id' })
    @IsUUID(4,{
      message: "입력한 프로필 ID가 옳바르지 않습니다."
    })
    @IsNotEmpty({ message: '프로필을 넣어주세요.' })
    @ApiProperty({
      example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
      description: 'Profile Image ID',
      required: true
    })
    uploads_id: UploadsEntity

    @ManyToOne(() => AnimalTypeEntity, { eager: true })
    @JoinColumn({ name: 'animal_type_id', referencedColumnName: 'id' })
    @IsUUID(4,{
      message: "입력한 Animal Type ID가 옳바르지 않습니다."
    })
    @IsNotEmpty({ message: 'Animal Type ID를 입력해주세요.' })
    @ApiProperty({
      example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
      description: '반려견 종류 ID',
      required: true
    })
    animal_type_id: AnimalTypeEntity

    @OneToOne(() => QrEntity, { eager: true })
    @JoinColumn({ name: 'qr_id', referencedColumnName: 'id' })
    @IsUUID(4,{
      message: "입력한 QR ID가 옳바르지 않습니다."
    })
    @IsNotEmpty({ message: 'QR ID를 입력해주세요.' })
    @ApiProperty({
      example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
      description: 'QR ID',
      required: true
    })
    qr_id: QrEntity

    @ManyToOne(() => CardEntity, { eager: true })
    @JoinColumn({ name: 'card_id', referencedColumnName: 'id' })
    @IsUUID(4,{
      message: "입력한 Card ID가 옳바르지 않습니다."
    })
    @IsNotEmpty({ message: 'Card ID를 입력해주세요.' })
    @ApiProperty({
      example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
      description: 'Card ID',
      required: true
    })
    card_id: CardEntity
}
