import { JoinColumn, Entity, ManyToOne } from 'typeorm'
import { CommonEntity } from 'src/common/entities/common.entity'
import { AnimalEntity } from 'src/animal/entities/animal.entity';
import { GuardianEntity } from 'src/guardian/entities/guardian.entity';

@Entity({
  name: 'guardian_animal',
})
export class GuardianAnimalEntity extends CommonEntity {

  @ManyToOne(() => GuardianEntity, { eager: true })
  @JoinColumn({ name: 'guardian_id', referencedColumnName: 'id' })
  guardian_id: GuardianEntity;

  @ManyToOne(() => AnimalEntity, { eager: true })
  @JoinColumn({ name: 'animal_id', referencedColumnName: 'id' })
  animal_id: AnimalEntity;
}
