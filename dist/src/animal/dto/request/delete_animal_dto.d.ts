import { AnimalEntity } from 'src/animal/entities/animal.entity';
declare const DeleteAnimalDto_base: import("@nestjs/common").Type<Pick<AnimalEntity, "id">>;
export declare class DeleteAnimalDto extends DeleteAnimalDto_base {
    id: string;
}
export {};
