import { Controller } from '@nestjs/common';
import { QrService } from '../service/qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}
}
