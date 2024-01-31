import { AnimalTypeEntity } from 'src/animal_type/animal_type.entity';
declare const GetAnimalTypeNameDto_base: import("@nestjs/common").Type<Pick<AnimalTypeEntity, "name">>;
export declare class GetAnimalTypeNameDto extends GetAnimalTypeNameDto_base {
    name: string;
}
export {};
