import { CardEntity } from 'src/card/card.entity';
declare const UpdateCardDto_base: import("@nestjs/common").Type<Omit<CardEntity, never>>;
export declare class UpdateCardDto extends UpdateCardDto_base {
    id: string;
}
export {};
