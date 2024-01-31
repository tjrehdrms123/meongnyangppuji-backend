import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { GuardianAnimalService } from './guardian_animal.service';
import { CreateGuardianAnimalDto } from './dto/request/create_guardian_animal_dto';
import { FindGuardianAnimalDto } from './dto/request/find_guardian_dto';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';

@Controller('guardian_animal')
@ApiTags('guardian_animal API')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
export class GuardianAnimalController {
  constructor(private readonly guardianAnimalService: GuardianAnimalService) {}
  @ApiOperation({ summary: '보호자/반려동물 연결 데이터 생성', description: '보호자/반려동물 연결 데이터 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-2000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-2000'],
    ErrorDefine['ERROR-4000'],
  ])
  @Post()
  async createGuardian(@Body() guardianAnimalData: CreateGuardianAnimalDto) {
    return await this.guardianAnimalService.createGuardian(guardianAnimalData);
  }

  @ApiOperation({ summary: '보호자/반려동물 데이터 조회', description: '보호자/반려동물 데이터 조회' })
    @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-2000']
  ])
  @Get()
  async getByIdGuardianAnimal(@Body() guardianAnimalData: FindGuardianAnimalDto) {
    return await this.guardianAnimalService.getByIdGuardianAnimal(guardianAnimalData);
  }
}
