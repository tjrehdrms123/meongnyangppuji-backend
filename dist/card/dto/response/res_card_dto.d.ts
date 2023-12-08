import { CardEntity } from "src/card/entities/card.entity";
declare const ResCardDto_base: import("@nestjs/common").Type<Omit<CardEntity, never>>;
export declare class ResCardDto extends ResCardDto_base {
}
export declare class ResCardRowDto {
    row: number;
}
export declare const ResCardMetaData: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: any;
    background_color: string;
    option: number;
    card_id: string;
};
export {};
