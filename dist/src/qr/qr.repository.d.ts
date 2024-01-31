import { Repository } from 'typeorm';
import { QrEntity } from './qr.entity';
import { CreateQrDto } from './dto/request/create_qr_dto';
import { UpdateQrDto } from './dto/request/update_qr_dto';
import { DeleteQrDto } from './dto/request/delete_qr_dto';
export declare class QrRepository {
    private readonly QrRepository;
    constructor(QrRepository: Repository<QrEntity>);
    createQr(QrData: CreateQrDto): Promise<QrEntity | null>;
    updateQr(QrData: UpdateQrDto): Promise<QrEntity | null>;
    deleteQr(QrData: DeleteQrDto): Promise<any>;
    isExitsQr(qrId: any): Promise<QrEntity | null>;
}
