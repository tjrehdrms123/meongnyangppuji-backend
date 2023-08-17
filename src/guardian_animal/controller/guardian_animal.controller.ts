import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResGuardianDto } from '../dto/response/res_guardian_dto';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';
import { GuardianAnimalService } from '../service/guardian_animal.service';
import { CreateGuardianAnimalDto } from '../dto/request/create_guardian_animal_dto';
import { FindGuardianAnimalDto } from '../dto/request/find_guardian_dto';

@Controller('guardian_animal')
@ApiTags('guardian_animal API')
export class GuardianAnimalController {
  constructor(private readonly guardianAnimalService: GuardianAnimalService) {}
  @ApiOperation({ summary: '보호자/반려동물 연결 데이터 생성', description: '보호자/반려동물 연결 데이터 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-2000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Post()
  async createGuardian(@Body() guardianAnimalData: CreateGuardianAnimalDto) {
    return await this.guardianAnimalService.createGuardian(guardianAnimalData);
  }

  @Get()
  async getByIdGuardianAnimal(@Body() guardianAnimalData: FindGuardianAnimalDto) {
    return await this.guardianAnimalService.getByIdGuardianAnimal(guardianAnimalData);
  }
}
