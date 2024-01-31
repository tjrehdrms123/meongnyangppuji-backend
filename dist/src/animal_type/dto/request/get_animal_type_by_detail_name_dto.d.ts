import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
declare const GetAnimalTypeByDetailNameDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "name">>;
export declare class GetAnimalTypeByDetailNameDto extends GetAnimalTypeByDetailNameDto_base {
    name: string;
}
export {};
