import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/request/create_animal_dto';
import { GetAnimalDto } from './dto/request/get_animal_dto';
import { UpdateAnimalDto } from './dto/request/update_animal_dto';
import { DeleteAnimalDto } from './dto/request/delete_animal_dto';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';
import { FileFieldsInterceptor, FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { AwsService } from 'src/uploads/service/aws.service';
import { GetListAniamlDto } from './dto/request/get_list_animal_dto';

@Controller('animal')
@ApiTags('animal API')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class AnimalController {
  constructor(
    private readonly animalService: AnimalService
  ) {}
  
  @ApiOperation({ summary: '반려동물 생성', description: '반려동물 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-5000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-1002'],
    ErrorDefine['ERROR-5000'],
    ErrorDefine['ERROR-6000'],
    ErrorDefine['ERROR-7000'],
  ])
 
  @Post()
  async createAnimal(@Body() animalData: CreateAnimalDto) {
    return await this.animalService.createAnimal(animalData);
  }

  @ApiOperation({ summary: '반려동물 정보 수정', description: '반려동물 정보 수정' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-5001']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-1002'],
    ErrorDefine['ERROR-5000'],
    ErrorDefine['ERROR-6000'],
    ErrorDefine['ERROR-7000'],
  ])
  @Put()
  async updateAnimal(@Body() animalData: UpdateAnimalDto) {
    return await this.animalService.updateAnimal(animalData);
  }

  @ApiOperation({ summary: '반려동물 삭제', description: '반려동물 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-5002']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Delete()
  async deleteAnimal(@Body() animalData: DeleteAnimalDto) {
    return await this.animalService.deleteAnimal(animalData);
  }

  @ApiOperation({ summary: '반려동물 조회', description: '반려동물 조회' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-5003']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Get()
  async getAnimal(@Body() animalData: GetAnimalDto) {
    return await this.animalService.getAniaml(animalData);
  }
 
  @ApiOperation({ summary: '반려동물 목록 조회', description: '반려동물 목록 조회' })
  @Get('/list')
  async getListAnimal(@Body() animalData: GetListAniamlDto) {
    return await this.animalService.getListAniaml(animalData);
  }
}
