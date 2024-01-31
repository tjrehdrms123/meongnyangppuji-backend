import { AnimalEntity } from 'src/animal/animal.entity';
declare const UpdateAnimalDto_base: import("@nestjs/common").Type<Omit<AnimalEntity, never>>;
export declare class UpdateAnimalDto extends UpdateAnimalDto_base {
    id: string;
}
export {};
