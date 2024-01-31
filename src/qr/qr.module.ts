import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrEntity } from './qr.entity';
import { QrController } from './qr.controller';
import { QrService } from './qr.service';
import { QrRepository } from './qr.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([QrEntity]),
  ],
  controllers: [QrController],
  providers: [QrService, QrRepository],
  exports: [QrRepository]
})
export class QrModule {}
