import { Body, Controller, Get, Post, UseFilters, UseInterceptors } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';
import { ApiCreatedResponse, ApiNotAcceptableResponse, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnimalTypeDto } from '../dto/animal_type_dto';
import { HttpApiExceptionFilter } from 'src/common/exceptions/http-api-exception.filter';
import { SuccessInterceptor } from 'src/common/exceptions/success.interceptor';
import { DeleteAnimalTypeByDetailNameDto } from '../dto/delete_animal_type_by_detail_name_dto';

@Controller('animal_type')
@ApiTags('animal_type API')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpApiExceptionFilter)
export class AnimalTypeController {
  // TODO: Swagger DOCS 수정해야됨 | Swagger 전용 Response Interface 생성 예정
  constructor(private readonly animalTypeService: AnimalTypeService) {}
  @ApiOperation({ summary: '애완 동물 타입 생성', description: '완료' })
  @ApiCreatedResponse({ description: '생성 성공', type: CreateAnimalTypeDto })
  @ApiNotAcceptableResponse({ description: '유효성 검사 실패', type: DeleteAnimalTypeByDetailNameDto})
  @Post()
  async createAnimalType(@Body() animalTypeData: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(animalTypeData);
  }
}
