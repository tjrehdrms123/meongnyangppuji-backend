import { QrEntity } from 'src/qr/entities/qr.entity';
declare const DeleteQrDto_base: import("@nestjs/common").Type<Pick<QrEntity, "id">>;
export declare class DeleteQrDto extends DeleteQrDto_base {
    id: string;
}
export {};
