import { Body, Controller, Get, HttpStatus, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotAcceptableResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { HttpApiExceptionFilter } from 'src/common/exceptions/http-api-exception.filter';
import { SuccessInterceptor } from 'src/common/exceptions/success.interceptor';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/delete_animal_type_by_detail_name_dto';
import { AnimalTypeDto } from '../dto/animal_type_dto';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Controller('animal_type')
@ApiTags('animal_type API')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpApiExceptionFilter)
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
    ErrorDefine['ERROR-0000'],
    ErrorDefine['ERROR-0001']
  ])
  @ApiBadRequestResponse({ description: '유효성 검사에 실패했습니다.', type: DeleteAnimalTypeByDetailNameDto}) // 400
  @ApiUnauthorizedResponse({ description: '잘못된 토큰 입니다', type: DeleteAnimalTypeByDetailNameDto}) // 401
  @Post()
  async createAnimalType(@Body() animalTypeData: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(animalTypeData);
  }
}
