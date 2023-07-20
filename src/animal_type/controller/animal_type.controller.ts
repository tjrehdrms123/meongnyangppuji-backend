import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/request/create_animal_type_dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { GetAnimalTypeByDetailNameDto } from '../dto/request/get_animal_type_by_detail_name_dto';
import { ResAnimalTypeDto } from '../dto/response/res_animal_type_dto';
import { ResAnimalTypeNameDto } from '../dto/response/res_animal_type_name_dto';
import { ResAnimalTypeDetailNameDto } from '../dto/response/res_animal_type_detail_name_dto';

@Controller('animal_type')
@ApiTags('animal_type API')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}
  @ApiOperation({ summary: '애완 동물 타입 생성', description: '애완 동물 타입 생성' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: ResAnimalTypeDto,
      exampleTitle: '애완동물 타입 생성 성공 예시',
      exampleDescription: '애완동물 타입 생성 성공 예시',
    }   
  ])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-1000']
  ])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Post()
  async createAnimalType(@Body() animalTypeData: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(animalTypeData);
  }

  @ApiOperation({ summary: '애완동물 타입 종류 조회 예시', description: '애완동물 타입 종류 조회 예시' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: ResAnimalTypeNameDto,
      exampleTitle: '애완동물 타입 종류 조회 예시',
      exampleDescription: '애완동물 타입 종류 조회 성공 예시',
    }   
  ])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Get('name')
  async getAnimalTypeName() {
    return await this.animalTypeService.getAnimalTypeName();
  }

  @ApiOperation({ summary: '애완동물 상세 이름 조회 예시', description: '애완동물 상세 이름 조회 예시' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: ResAnimalTypeDetailNameDto,
      exampleTitle: '애완동물 상세 이름 조회 예시',
      exampleDescription: '애완동물 상세 이름 조회 성공 예시',
    }   
  ])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Get('detail_name')
  async getAnimalTypeByDetailName(@Body() animalTypeData: GetAnimalTypeByDetailNameDto) {
    return await this.animalTypeService.getAnimalTypeByDetailName(animalTypeData);
  }
}
