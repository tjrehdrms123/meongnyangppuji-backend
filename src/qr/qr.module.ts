import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QrEntity } from './entities/qr.entity';
import { QrController } from './controller/qr.controller';
import { QrService } from './service/qr.service';
import { QrRepository } from './infra/qr.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([QrEntity]),
  ],
  controllers: [QrController],
  providers: [QrService, QrRepository],
  exports: [QrRepository]
})
export class GuardianModule {}
