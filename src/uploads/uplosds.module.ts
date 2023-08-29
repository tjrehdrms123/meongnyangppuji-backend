import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadsController } from './controller/uploads.controller';
import { UploadsEntity } from './entities/uplosds.entity';
import { UploadsRepository } from './infra/uploads.repository';
import { AwsService } from './service/aws.service';
import { UploadsService } from './service/uploads.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UploadsEntity]),
  ],
  controllers: [UploadsController],
  providers: [UploadsService, UploadsRepository,AwsService],
  exports: [UploadsRepository]
})
export class UploadsModule {}
