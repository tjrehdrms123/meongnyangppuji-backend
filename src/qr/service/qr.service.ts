import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { GuardianRepository } from 'src/guardian/infra/guardian.repository';
import { QrRepository } from '../infra/qr.repository';
import { CreateQrDto } from '../dto/request/create_qr_dto';
import { QrEntity } from '../entities/qr.entity';
import { UpdateQrDto } from '../dto/request/update_qr_dto';
import { DeleteQrDto } from '../dto/request/delete_qr_dto';

@Injectable()
export class QrService {
  private readonly logger = new Logger(QrService.name);
  constructor(
    private readonly qrRepository: QrRepository,
  ) {}

  // POST: QR 등록
  async createQr(qrData: CreateQrDto): Promise<QrEntity | null> {
    return await this.qrRepository.createQr(qrData);
  }

  // UPDATE: QR 정보 수정
  async updateQr(qrData: UpdateQrDto): Promise<QrEntity | null> {
    return await this.qrRepository.updateQr(qrData);
  }

  // DELETE: QR 삭제
  async deleteQr(qrData: DeleteQrDto): Promise<any> {
    return await this.qrRepository.deleteQr(qrData);
  }
}
