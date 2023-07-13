import { Body, Controller, Get, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotAcceptableResponse, ApiOperation, ApiResponse, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { HttpApiExceptionFilter } from 'src/common/exceptions/http-api-exception.filter';
import { SuccessInterceptor } from 'src/common/exceptions/success.interceptor';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/delete_animal_type_by_detail_name_dto';
import { AnimalTypeDto } from '../dto/animal_type_dto';
import { AnimalTypeEntity } from '../entities/animal_type.entity';

@Controller('animal_type')
@ApiTags('animal_type API')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpApiExceptionFilter)
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}
  // TODO: 응답 코드 어떻게 추상화 시킬수있는지
  @ApiOperation({ summary: '애완 동물 타입 생성', description: '애완 동물 타입 생성' })
  @ApiCreatedResponse({ description: '생성에 성공했습니다.', type: AnimalTypeEntity }) // 200
  @ApiBadRequestResponse({ description: '유효성 검사에 실패했습니다.', type: DeleteAnimalTypeByDetailNameDto}) // 400
  @ApiUnauthorizedResponse({ description: '잘못된 토큰 입니다', type: DeleteAnimalTypeByDetailNameDto}) // 401
  @Post()
  async createAnimalType(@Body() animalTypeData: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(animalTypeData);
  }
}
