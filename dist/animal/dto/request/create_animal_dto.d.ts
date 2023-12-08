import { AnimalEntity } from 'src/animal/entities/animal.entity';
declare const CreateAnimalDto_base: import("@nestjs/common").Type<Pick<AnimalEntity, "name" | "introduction" | "sex" | "uploads_id" | "animal_type_id" | "qr_id" | "card_id">>;
export declare class CreateAnimalDto extends CreateAnimalDto_base {
}
export {};
