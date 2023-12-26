import { CommonEntity } from 'src/common/entities/common.entity';
import { AnimalEntity } from 'src/animal/entities/animal.entity';
import { GuardianEntity } from 'src/guardian/entities/guardian.entity';
export declare class GuardianAnimalEntity extends CommonEntity {
    guardian_id: GuardianEntity;
    animal_id: AnimalEntity;
}
