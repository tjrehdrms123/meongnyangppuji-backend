import { AnimalTypeEntity } from '../animal_type.entity';
declare const AnimalTypeDto_base: import("@nestjs/common").Type<Partial<AnimalTypeEntity>>;
export declare class AnimalTypeDto extends AnimalTypeDto_base {
    name: string;
    detail_name: string;
}
export {};
