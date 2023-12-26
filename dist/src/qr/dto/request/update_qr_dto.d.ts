import { QrEntity } from 'src/qr/entities/qr.entity';
declare const UpdateQrDto_base: import("@nestjs/common").Type<Omit<QrEntity, never>>;
export declare class UpdateQrDto extends UpdateQrDto_base {
    id: string;
}
export {};
