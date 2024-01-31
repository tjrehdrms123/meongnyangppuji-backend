import { CardEntity } from 'src/card/card.entity';
declare const DeleteCardDto_base: import("@nestjs/common").Type<Pick<CardEntity, "id">>;
export declare class DeleteCardDto extends DeleteCardDto_base {
    id: string;
}
export {};
