import { Body, Controller, Delete, HttpStatus, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { QrService } from '../service/qr.service';
import { CreateQrDto } from '../dto/request/create_qr_dto';
import { UpdateQrDto } from '../dto/request/update_qr_dto';
import { DeleteQrDto } from '../dto/request/delete_qr_dto';
import { Role } from 'src/common/define/EnumDefine';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/common/guard/Roles.guard';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';

@Controller('qr')
@ApiTags('qr API')
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
  @Put()
  async updateQr(@Body() qrData: UpdateQrDto) {
    return await this.qrService.updateQr(qrData);
  }

  @ApiOperation({ summary: '[ ADMIN ] QR 삭제', description: 'QR 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-4002']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Roles(Role.Admin)
  @Delete()
  async deleteQr(@Body() QrDto: DeleteQrDto) {
    return await this.qrService.deleteQr(QrDto);
  }
}
