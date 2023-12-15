import { Body, Controller, Delete, HttpStatus, Patch, Post, Put, UseGuards } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { Role } from 'src/common/define/EnumDefine';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/Roles.guard';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';
import { CardService } from '../service/card.service';
import { CreateCardDto } from '../dto/request/create_card_dto';
import { UpdateCardDto } from '../dto/request/update_card_dto';
import { DeleteCardDto } from '../dto/request/delete_card_dto';

@Controller('card')
@ApiTags('card API')
@UseGuards(JwtAuthGuard)
@UseGuards(RolesGuard)
export class CardController {
  constructor(private readonly cardService: CardService) {}
  
  @ApiOperation({ summary: 'Card 생성', description: 'Card 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Post()
  async createCard(@Body() CardData: CreateCardDto) {
    return await this.cardService.createCard(CardData);
  }

  @ApiOperation({ summary: 'Card 수정', description: 'Card 수정' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7001']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Put()
  async updateCard(@Body() CardData: UpdateCardDto) {
    return await this.cardService.updateCard(CardData);
  }

  @ApiOperation({ summary: '[ ADMIN ] Card 삭제', description: 'Card 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7002']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
  ])
  @Roles(Role.Admin)
  @Delete()
  async deleteCard(@Body() CardData: DeleteCardDto) {
    return await this.cardService.deleteCard(CardData);
  }
}
