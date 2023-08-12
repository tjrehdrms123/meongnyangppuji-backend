import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QrEntity } from '../entities/qr.entity';
import { CreateQrDto } from '../dto/request/create_qr_dto';
import { UpdateQrDto } from '../dto/request/update_qr_dto';
import { DeleteQrDto } from '../dto/request/delete_qr_dto';

@Injectable()
export class QrRepository {
    constructor(
        @InjectRepository(QrEntity)
        private readonly QrRepository: Repository<QrEntity>
    ){}
    
    /**
     * POST: QR 등록
     * @param QrData
     * @returns 등록된 QR 정보
     */
    async createQr(QrData: CreateQrDto): Promise<QrEntity | null>{
        return await this.QrRepository.save(QrData);
    }

    /**
     * UPDATE: QR 정보 수정
     * @param QrData 
     * @returns 변경된 QR 정보
     */
    async updateQr(QrData: UpdateQrDto): Promise<QrEntity | null> {
        const { id, qr_issuance, qr_use } = QrData;
        const qr = await this.QrRepository.findOneBy({ id: id });
        qr.qr_issuance = qr_issuance;
        qr.qr_use = qr_use;
        return this.QrRepository.save(QrData);
    }

    /**
     * DELETE: QR 삭제
     * @param QrData 
     * @returns 삭제된 QR의 Row
     */
    async deleteQr(QrData: DeleteQrDto): Promise<any> {
        const { id } = QrData;
        const qr = await this.QrRepository.softDelete({ id: id });
        return qr;
    }
}