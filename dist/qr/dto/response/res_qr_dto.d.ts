import { QrEntity } from "src/qr/entities/qr.entity";
declare const ResQrDto_base: import("@nestjs/common").Type<Omit<QrEntity, never>>;
export declare class ResQrDto extends ResQrDto_base {
}
export declare class ResQrRowDto {
    row: number;
}
export declare const ResQrMetaData: {
    id: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: any;
    qr_issuance: number;
    qr_use: number;
    animal_id: string;
};
export {};
