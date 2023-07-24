import { Body, Controller, HttpStatus, Patch, Post, Put } from '@nestjs/common';
import { UsersService } from '../service/Users.service';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';;
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from '../dto/request/create_users_dto';

@Controller('users')
@ApiTags('users API')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @ApiOperation({ summary: '유저 생성', description: '유저 생성' })
  @Post()
  async createUsers(@Body() usersData: CreateUsersDto) {
    return await this.usersService.createUsers(usersData);
  }
}
