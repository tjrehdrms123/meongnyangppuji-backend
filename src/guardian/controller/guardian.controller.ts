import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put } from '@nestjs/common';
import { GuardianService } from '../service/guardian.service';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { CreateGuardianDto } from '../dto/request/create_guardian_dto';
import { UpdateGuardianDto } from '../dto/request/update_guardian_dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ResGuardianDto } from '../dto/response/res_guardian_dto';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { DeleteGuardianDto } from '../dto/request/delete_guardian_dto';
import { FindGuardianDto } from '../dto/request/find_guardian_dto';

@Controller('guardian')
@ApiTags('guardian API')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}
  
  @ApiOperation({ summary: '보호자 조회', description: '보호자 조회' })
  @Get()
  async getGuardian(@Body() guardianData: FindGuardianDto) {
    return await this.guardianService.getGuardian(guardianData);
  }

  @ApiOperation({ summary: '보호자 생성', description: '보호자 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-2000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Post()
  async createGuardian(@Body() guardianData: CreateGuardianDto) {
    return await this.guardianService.createGuardian(guardianData);
  }

  @ApiOperation({ summary: '보호자 수정', description: '보호자 수정' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-2001']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [ErrorDefine['ERROR-2000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Put()
  async updateGuardian(@Body() guardianData: UpdateGuardianDto) {
    return await this.guardianService.updateGuardian(guardianData);
  }

  @ApiOperation({ summary: '보호자 삭제', description: '보호자 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-2002']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [ErrorDefine['ERROR-2000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Delete()
  async deleteGuardian(@Body() guardianData: DeleteGuardianDto) {
    return await this.guardianService.deleteGuardian(guardianData);
  }
}
