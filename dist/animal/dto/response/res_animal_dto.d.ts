import { AnimalEntity } from "src/animal/entities/animal.entity";
declare const ResAnimalDto_base: import("@nestjs/common").Type<Omit<AnimalEntity, never>>;
export declare class ResAnimalDto extends ResAnimalDto_base {
}
export declare class ResAnimalRowDto {
    row: number;
}
export {};
