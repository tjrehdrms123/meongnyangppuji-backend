import { Body, Controller, Delete, HttpStatus, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { QrService } from './qr.service';
import { CreateQrDto } from './dto/request/create_qr_dto';
import { UpdateQrDto } from './dto/request/update_qr_dto';
import { DeleteQrDto } from './dto/request/delete_qr_dto';
import { Role } from 'src/common/define/EnumDefine';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/Roles.guard';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';
import { NoAuth } from 'src/auth/guards/NoAuth.guard';

@Controller('qr')
@ApiTags('qr API')
@ApiBearerAuth('access-token')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
export class QrController {
  constructor(private readonly qrService: QrService) {}
  
  @ApiOperation({ summary: 'QR 생성', description: 'QR 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-4000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @NoAuth()
  @Post()
  async createQr(@Body() qrData: CreateQrDto) {
    return await this.qrService.createQr(qrData);
  }

  @ApiOperation({ summary: 'QR 수정', description: 'QR 수정' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-4001']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @NoAuth()
  @Put()
  async updateQr(@Body() qrData: UpdateQrDto) {
    return await this.qrService.updateQr(qrData);
  }

  @ApiOperation({ summary: '[ ADMIN ] QR 삭제', description: 'QR 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-4002']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
    ErrorDefine['ERROR-0007'],
    ErrorDefine['ERROR-0008'],
    ErrorDefine['ERROR-0009']
  ])
  @Roles(Role.Admin)
  @Delete()
  async deleteQr(@Body() QrDto: DeleteQrDto) {
    return await this.qrService.deleteQr(QrDto);
  }
}
