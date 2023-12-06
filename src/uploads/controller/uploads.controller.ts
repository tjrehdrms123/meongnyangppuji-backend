import { Body, Controller, Delete, HttpStatus, Patch, Post, Put,UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { UploadsService } from '../service/uploads.service';
import { AwsService } from '../service/aws.service';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
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
  
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth('access-token')
  @ApiOperation({ summary: '이미지 업로드', description: '이미지 업로드' })
  @UseInterceptors(FileInterceptor('img'))
  @Post()
  async uploadImg(
    @UploadedFile() file,
  ) {
    return await this.awsService.uploadFileToS3('animal',file);
  }

  @ApiOperation({ summary: '반려동물 썸네일 이미지 업로드', description: '반려동물 썸네일 이미지 업로드' })
  // @UseGuards(JwtAuthGuard)
  // @ApiBearerAuth('access-token')
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-6000']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3001'],
    ErrorDefine['ERROR-3002'],
    ErrorDefine['ERROR-6001'],
  ])
  @Post('animal')
  async createAnimalProfileImg(
    @Body() imgData: {
      imgUrl: string,
      imgCropUrl : string
    }
  ) {
    const { imgUrl, imgCropUrl } = imgData;
    return await this.uploadsService.createImg({
      img: imgUrl,
      img_crop: imgCropUrl
    })
  }
}
