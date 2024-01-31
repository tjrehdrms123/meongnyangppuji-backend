import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
declare const DeleteAnimalTypeNameDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "name">>;
export declare class DeleteAnimalTypeNameDto extends DeleteAnimalTypeNameDto_base {
    name: string;
}
export {};
