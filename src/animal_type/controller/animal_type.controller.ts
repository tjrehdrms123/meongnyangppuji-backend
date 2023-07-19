import { Body, Controller, Get, HttpStatus, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AnimalTypeDto } from '../dto/animal_type_dto';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { SuccessInterceptor } from 'src/common/exceptions/success.interceptor';
import { GetAnimalTypeNameDto } from '../dto/get_animal_type_name_dto';

@Controller('animal_type')
@ApiTags('animal_type API')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}
  @ApiOperation({ summary: '애완 동물 타입 생성', description: '애완 동물 타입 생성' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: AnimalTypeDto,
      exampleTitle: '애완 동물 타입 성공 예시',
      exampleDescription: '애완 동물 타입 성공 예시',
      generic: CreateAnimalTypeDto
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

  @Get('name')
  async getAnimalType() {
    return await this.animalTypeService.getAnimalTypeName();
  }
}
