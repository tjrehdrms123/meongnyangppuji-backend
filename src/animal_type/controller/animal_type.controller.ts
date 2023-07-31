import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/request/create_animal_type_dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { GetAnimalTypeByDetailNameDto } from '../dto/request/get_animal_type_by_detail_name_dto';
import { UpdateAnimalTypeByDetailNameDto } from '../dto/request/update_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/request/delete_animal_type_by_detail_name_dto';
import { DeleteAnimalTypeNameDto } from '../dto/request/delete_animal_type_by_name_dto';
import { ResAnimalTypeDetailNameDto, ResAnimalTypeDto, ResAnimalTypeManyRowDto, ResAnimalTypeNameDto, ResAnimalTypeRowDto } from '../dto/response/res_animal_type_dto';
import { SuccessDefine } from 'src/common/define/SuccessDefine';

@Controller('animal_type')
@ApiTags('animal_type API')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}
  @ApiOperation({ summary: '애완 동물 타입 생성', description: '애완 동물 타입 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-1000']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [ErrorDefine['ERROR-1000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Post()
  async createAnimalType(@Body() animalTypeData: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(animalTypeData);
  }

  @ApiOperation({ summary: '애완동물 타입 종류 조회 예시', description: '애완동물 타입 종류 조회 예시' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-1001']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Get('name')
  async getAnimalTypeName() {
    return await this.animalTypeService.getAnimalTypeName();
  }

  @ApiOperation({ summary: '애완동물 타입 상세 이름 조회 예시', description: '애완동물 타입 상세 이름 조회 예시' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-1002']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Get('detail_name')
  async getAnimalTypeByDetailName(@Body() animalTypeData: GetAnimalTypeByDetailNameDto) {
    return await this.animalTypeService.getAnimalTypeByDetailName(animalTypeData);
  }

  @ApiOperation({ summary: '애완동물 타입 내용 변경', description: '애완동물 타입 내용 변경' })
  @SuccessResponse(HttpStatus.OK, [])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Patch()
  async updateAnimalTypeByDetailName(@Body() animalTypeData: UpdateAnimalTypeByDetailNameDto) {
    return await this.animalTypeService.updateAnimalTypeByDetailName(animalTypeData);
  }

  @ApiOperation({ summary: '반려동물 상세 이름으로 삭제 변경', description: '반려동물 상세 이름으로 삭제 변경' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-1003']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Delete('detail_name')
  async deleteAnimalTypeByDetailName(@Body() animalTypeData: DeleteAnimalTypeByDetailNameDto) {
    return await this.animalTypeService.deleteAnimalTypeByDetailName(animalTypeData);
  }

  @ApiOperation({ summary: '반려동물 이름으로 삭제', description: '반려동물 이름으로 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-1004']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Delete('name')
  async deleteAnimalByName(@Body() animalTypeData: DeleteAnimalTypeNameDto) {
    return await this.animalTypeService.deleteAnimalByName(animalTypeData);
  }
}
