import { IsNotEmpty } from 'class-validator'
import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { ApiProperty } from '@nestjs/swagger'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'
import { Exclude } from 'class-transformer'

@Entity({
  name: 'users',
})
export class UsersEntity extends CommonEntity {

    @Index({ unique: true })
    @Column({ type: 'varchar', comment: '유저 아이디', nullable: false, length: 10, charset: 'utf8mb4' })
    @IsNotEmpty({ message: '유저의 아아디를 입력해주세요.' })
    @ApiProperty({
      example: 'develop',
      description: '유저 아아디',
      required: true
    })
    user_id: string

    @Column({ type: 'varchar', comment: '패스워드', nullable: false, charset: 'utf8mb4' })
    @ApiProperty({
      example: '1234',
      description: '유저의 패스워드',
      required: true
    })
    @Exclude()
    password: string

    @Column({ type: 'boolean', comment: '서비스이용약관', nullable: false })
    @IsNotEmpty({ message: '서비스이용약관을 입력해주세요.' })
    @ApiProperty({
      example: true,
      description: '서비스이용약관',
      required: true
    })
    consent_check: boolean

    @Column({ type: 'varchar', comment: '개인정보처리방침', nullable: false })
    @IsNotEmpty({ message: '개인정보처리방침을 입력해주세요.' })
    @ApiProperty({
      example: true,
      description: '개인정보처리방침',
      required: true
    })
    privacy_policy_check: boolean

    //* Relation */
    @OneToOne(() => GuardianEntity, { eager: true })
    @JoinColumn({ name: 'guardian_id', referencedColumnName: 'id' })
    guardian_id: GuardianEntity
}
