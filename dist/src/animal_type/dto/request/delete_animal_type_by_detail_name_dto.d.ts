import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
declare const DeleteAnimalTypeByDetailNameDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "detail_name">>;
export declare class DeleteAnimalTypeByDetailNameDto extends DeleteAnimalTypeByDetailNameDto_base {
    detail_name: string;
}
export {};
