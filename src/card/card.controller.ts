import { Body, Controller, Delete, Get, HttpStatus, Patch, Post, Put, Query, UseGuards } from '@nestjs/common';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { Role } from 'src/common/define/EnumDefine';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RolesGuard } from 'src/auth/guards/Roles.guard';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';
import { CardService } from './card.service';
import { CreateCardDto } from './dto/request/create_card_dto';
import { UpdateCardDto } from './dto/request/update_card_dto';
import { DeleteCardDto } from './dto/request/delete_card_dto';
import { NoAuth } from 'src/auth/guards/NoAuth.guard';

@Controller('card')
@ApiTags('card API')
@UseGuards(RolesGuard)
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @ApiOperation({ summary: 'Card 조회', description: 'Card 조회' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7000']])
  @NoAuth()
  @Get()
  async getCardId(@Query('option') option: string) {
    return await this.cardService.getCardId(option);
  }

  @ApiOperation({ summary: 'Card 목록 조회', description: 'Card 목록 조회' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7000']])
  @NoAuth()
  @Get('option')
  async getCardOption() {
    return await this.cardService.getCardOption();
  }

  @ApiOperation({ summary: 'Card 생성', description: 'Card 생성' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7000']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
    ErrorDefine['ERROR-0007'],
    ErrorDefine['ERROR-0008'],
    ErrorDefine['ERROR-0009']
  ])
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Post()
  async createCard(@Body() CardData: CreateCardDto) {
    return await this.cardService.createCard(CardData);
  }

  @ApiOperation({ summary: 'Card 수정', description: 'Card 수정' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7001']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
    ErrorDefine['ERROR-0007'],
    ErrorDefine['ERROR-0008'],
    ErrorDefine['ERROR-0009']
  ])
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Put()
  async updateCard(@Body() CardData: UpdateCardDto) {
    return await this.cardService.updateCard(CardData);
  }

  @ApiOperation({ summary: '[ ADMIN ] Card 삭제', description: 'Card 삭제' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-7002']])
  @ErrorResponse(HttpStatus.UNAUTHORIZED, [
    ErrorDefine['ERROR-0001'],
    ErrorDefine['ERROR-0002'],
    ErrorDefine['ERROR-0007'],
    ErrorDefine['ERROR-0008'],
    ErrorDefine['ERROR-0009']
  ])
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @Roles(Role.Admin)
  @Delete()
  async deleteCard(@Body() CardData: DeleteCardDto) {
    return await this.cardService.deleteCard(CardData);
  }
}
