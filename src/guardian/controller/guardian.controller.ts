import { Body, Controller, HttpStatus, Patch, Post, Put } from '@nestjs/common';
import { GuardianService } from '../service/guardian.service';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ResGuardianTypeDto } from '../dto/response/res_guardian_dto';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('guardian')
@ApiTags('guardian API')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}
  
  @ApiOperation({ summary: '보호자 생성', description: '보호자 생성' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: ResGuardianTypeDto,
      exampleTitle: '보호자 생성 성공 예시',
      exampleDescription: '보호자 생성 성공 예시',
    }   
  ])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Post()
  async createAnimalType(@Body() guardianData: CreateGuardianDto) {
    return await this.guardianService.createGuardian(guardianData);
  }

  @ApiOperation({ summary: '보호자 수정', description: '보호자 수정' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: ResGuardianTypeDto,
      exampleTitle: '보호자 업데이트 성공 예시',
      exampleDescription: '보호자 업데이트 성공 예시',
    }   
  ])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Put()
  async updateAnimalType(@Body() guardianData: UpdateGuardianDto) {
    return await this.guardianService.updateGuardian(guardianData);
  }
}
