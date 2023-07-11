import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'
import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { Exclude } from 'class-transformer'

@Entity({
  name: 'animal',
}) // Animal : 테이블 명
export class AnimalEntity extends CommonEntity {
    // @Column({ type: 'varchar', comment: '반려동물 이름', nullable: false, length: 50, charset: 'utf8mb4' })
    // @IsNotEmpty({ message: '반려동물 이름을 입력해주세요.' })
    // name: string
    
    // @Column({ name: 'guardian_name', type: 'varchar', comment: '보호자 이름', nullable: false, length: 50, charset: 'utf8mb4' })
    // @IsNotEmpty({ message: '보호자 이름을 입력해주세요.' })
    // guardianName: string

    // @Column({ name: 'guardian_phone_number', comment: '보호자 전화번호', type: 'number', nullable: false, length: 50, charset: 'utf8mb4' })
    // @IsNotEmpty({ message: '보호자 연락처를 입력해주세요.' })
    // guardianPhoneNumber: number

    // @Column({ type: 'varchar', comment: '자기소개', nullable: false, length: 30, charset: 'utf8mb4' })
    // @IsNotEmpty({ message: '반려동물 자기소개를 입력해주세요.' })
    // introduction: string

    // // TODO: 동물 종류 엔터티 생성 후 JOIN 작업
    // // @OneToOne(() => TypeEntity) // 단방향 연결, 양방향도 가능
    // // @JoinColumn({ name: 'type_id', referencedColumnName: 'id' })
    // // type: TypeEntity
    
    // @Column({ name:'detail_type', type: 'varchar', comment: '반려동물 품종', nullable: false, length: 50, charset: 'utf8mb4' })
    // @IsNotEmpty({ message: '반려동물 품종을 입력해주세요.' })
    // detailType: string

    // @Column({ type: 'number', comment: '나이', nullable: false, charset: 'utf8mb4' })
    // @IsNotEmpty({ message: '반려동물 나이를 입력해주세요.' })
    // age: number
    
    // @Column({ type: 'enum', comment: '성별', enum: Sex, nullable: false })
    // @IsNotEmpty({ message: '반려동물 성별을 선택해주세요.' })
    // sex: Sex

    // @Column({ name: 'qr_issuance', type: 'enum', comment: 'QR 발행 여부', enum: QRissuance, nullable: false })
    // @IsNotEmpty({ message: 'QR 발행 여부를 선택해주세요.' })
    // qrIssuance: QRissuance

    // TODO: 프로필 엔터티 생성 후 JOIN 작업
    // @OneToOne(() => ProfileEntity) // 단방향 연결, 양방향도 가능
    // @JoinColumn({ name: 'profile_id', referencedColumnName: 'id', onDelete: 'CASCADE', })
    // profile: ProfileEntity
}
