import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
declare const CreateAnimalTypeDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "name" | "detail_name">>;
export declare class CreateAnimalTypeDto extends CreateAnimalTypeDto_base {
    name: string;
    detail_name: string;
}
export {};
