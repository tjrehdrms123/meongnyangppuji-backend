import { QrRepository } from '../infra/qr.repository';
import { CreateQrDto } from '../dto/request/create_qr_dto';
import { QrEntity } from '../entities/qr.entity';
import { UpdateQrDto } from '../dto/request/update_qr_dto';
import { DeleteQrDto } from '../dto/request/delete_qr_dto';
export declare class QrService {
    private readonly qrRepository;
    private readonly logger;
    constructor(qrRepository: QrRepository);
    createQr(qrData: CreateQrDto): Promise<QrEntity | null>;
    updateQr(qrData: UpdateQrDto): Promise<QrEntity | null>;
    deleteQr(qrData: DeleteQrDto): Promise<any>;
}
