import { CommonEntity } from 'src/common/entities/common.entity';
import { AnimalEntity } from 'src/animal/animal.entity';
import { GuardianEntity } from 'src/guardian/guardian.entity';
export declare class GuardianAnimalEntity extends CommonEntity {
    guardian_id: GuardianEntity;
    animal_id: AnimalEntity;
}
