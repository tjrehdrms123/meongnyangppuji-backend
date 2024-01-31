import { CardEntity } from '../card.entity';
declare const CardDto_base: import("@nestjs/common").Type<Partial<CardEntity>>;
export declare class CardDto extends CardDto_base {
    background_color: string;
    option: number;
}
export {};
