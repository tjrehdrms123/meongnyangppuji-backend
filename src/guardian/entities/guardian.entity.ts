import { IsNotEmpty, IsString } from 'class-validator'
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'
import { UsersEntity } from 'src/users/entities/users.entity'

@Entity({
  name: 'guardian',
})
export class GuardianEntity extends CommonEntity {

    @Column({ type: 'varchar', comment: '보호자 이름', nullable: false, length: 10, charset: 'utf8mb4' })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '보호자 이름을 입력해주세요.' })
    @ApiProperty({
      example: '홍길동',
      description: '반려동물 보호자 이름',
      required: true
    })
    name: string

    @Column({ type: 'varchar', comment: '보호자 전화번호', nullable: false, length: 30, charset: 'utf8mb4' })
    @IsString({ message: '문자로 입력해주세요.' })
    @IsNotEmpty({ message: '보호자의 전화번호를 입력해주세요.' })
    @ApiProperty({
      example: '010-1234-1234',
      description: '보호자 전화번호',
      required: true
    })
    phone_number: string

    //* Relation */
    @OneToOne(() => UsersEntity, { eager: true })
    @IsNotEmpty({ message: 'Users ID를 입력해주세요.' })
    @JoinColumn({ name: 'users_id', referencedColumnName: 'id' })
    @ApiProperty({
      example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
      description: '유저 ID',
      required: true
    })
    users_id: UsersEntity
}
