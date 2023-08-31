import { Body, Controller, Delete, HttpStatus, Patch, Post, Put, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UploadsService } from '../service/uploads.service';
import { AwsService } from '../service/aws.service';
import { FileFieldsInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

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
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-6000']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3001'],
    ErrorDefine['ERROR-3002'],
    ErrorDefine['ERROR-6001'],
  ])
  @Post('/')
  async createAnimalProfileImg(
    @UploadedFiles() files,
  ) {
    const img = await this.awsService.uploadFileToS3('animal',files?.img);
    const imgCrop = await this.awsService.uploadFileToS3('animal',files?.img_crop);  
    return await this.uploadsService.createImg({
      img: img.url,
      img_crop: imgCrop.url
    })
  }
}
