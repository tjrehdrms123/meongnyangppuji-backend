import { CommonEntity } from 'src/common/entities/common.entity';
import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity';
import { QrEntity } from 'src/qr/entities/qr.entity';
import { UploadsEntity } from 'src/uploads/entities/uplosds.entity';
import { CardEntity } from 'src/card/entities/card.entity';
export declare class AnimalEntity extends CommonEntity {
    name: string;
    introduction: string;
    age: number;
    sex: boolean;
    like: number;
    read: number;
    uploads_id: UploadsEntity;
    animal_type_id: AnimalTypeEntity;
    qr_id: QrEntity;
    card_id: CardEntity;
}
