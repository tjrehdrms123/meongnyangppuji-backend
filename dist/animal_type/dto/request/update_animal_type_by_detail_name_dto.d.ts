import { AnimalTypeEntity } from 'src/animal_type/entities/animal_type.entity';
declare const UpdateAnimalTypeByDetailNameDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "detail_name" | "id">>;
export declare class UpdateAnimalTypeByDetailNameDto extends UpdateAnimalTypeByDetailNameDto_base {
    id: string;
    detail_name: string;
}
export {};
