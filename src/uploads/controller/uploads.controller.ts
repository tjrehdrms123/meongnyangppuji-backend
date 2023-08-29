import { Body, Controller, Delete, HttpStatus, Patch, Post, Put, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UploadsService } from '../service/uploads.service';
import { AwsService } from '../service/aws.service';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';

@Controller('uploads')
@ApiTags('uploads API')
export class UploadsController {
  constructor(
    private readonly uploadsService: UploadsService,
    private readonly awsService: AwsService
  ) {}
  
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'img', maxCount: 1 },
    { name: 'img_crop', maxCount: 1 },
  ]))
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth('access-token')
  @Post('/')
  async createAnimalProfileImg(
    @UploadedFiles() files,
  ) {
    const img = await this.awsService.uploadFileToS3('animal',files.img[0]);
    const imgCrop = await this.awsService.uploadFileToS3('animal',files.img_crop[0]);  
    return await this.uploadsService.createImg({
      img: img.url,
      img_crop: imgCrop.url
    })
  }
}
