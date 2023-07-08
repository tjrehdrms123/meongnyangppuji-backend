import { Module } from '@nestjs/common';
import { QrService } from './qr.service';
import { QrController } from './controller/qr.controller';

@Module({
  controllers: [QrController],
  providers: [QrService]
})
export class QrModule {}
