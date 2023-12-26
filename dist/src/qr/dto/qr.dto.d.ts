import { QrEntity } from '../entities/qr.entity';
import { AnimalEntity } from 'src/animal/entities/animal.entity';
declare const QrDto_base: import("@nestjs/common").Type<Partial<QrEntity>>;
export declare class QrDto extends QrDto_base {
    qr_issuance: boolean;
    qr_use: boolean;
    animal_id: AnimalEntity;
}
export {};
