import { QrService } from './qr.service';
import { CreateQrDto } from './dto/request/create_qr_dto';
import { UpdateQrDto } from './dto/request/update_qr_dto';
import { DeleteQrDto } from './dto/request/delete_qr_dto';
export declare class QrController {
    private readonly qrService;
    constructor(qrService: QrService);
    createQr(qrData: CreateQrDto): Promise<import("./qr.entity").QrEntity>;
    updateQr(qrData: UpdateQrDto): Promise<import("./qr.entity").QrEntity>;
    deleteQr(QrDto: DeleteQrDto): Promise<any>;
}
