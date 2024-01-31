import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
declare const UpdateAnimalTypeByDetailNameDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "id" | "detail_name">>;
export declare class UpdateAnimalTypeByDetailNameDto extends UpdateAnimalTypeByDetailNameDto_base {
    id: string;
    detail_name: string;
}
export {};
