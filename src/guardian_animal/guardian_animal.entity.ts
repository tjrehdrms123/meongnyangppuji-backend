import { JoinColumn, Entity, ManyToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { AnimalEntity } from 'src/animal/animal.entity';
import { GuardianEntity } from 'src/guardian/guardian.entity';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

@Entity({
  name: 'guardian_animal',
})
export class GuardianAnimalEntity extends CommonEntity {

  @IsUUID(4,{
    message: "Guardian ID가 옳바르지 않습니다."
  })
  @IsNotEmpty({ message: 'Guardian ID를 입력해주세요.' })
  @JoinColumn({ name: 'guardian_id', referencedColumnName: 'id' })
  @ManyToOne(() => GuardianEntity, { eager: true })
  @ApiProperty({
    example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
    description: '보호자 ID',
    required: true
  })
  guardian_id: GuardianEntity;

  @IsUUID(4,{
    message: "Animal ID가 옳바르지 않습니다."
  })
  @IsNotEmpty({ message: 'Animal ID를 입력해주세요.' })
  @ManyToOne(() => AnimalEntity, { eager: true })
  @JoinColumn({ name: 'animal_id', referencedColumnName: 'id' })
  @ApiProperty({
    example: "09995694-ccba-4a6b-a5be-5a4bdf7133db",
    description: '반려견 ID',
    required: true
  })
  animal_id: AnimalEntity;
}
