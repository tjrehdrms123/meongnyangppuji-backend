import { Body, Controller, Get, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../service/Users.service';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { LoginDto } from '../dto/request/login_dto';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UsersDto } from '../dto/user.dto';
import { SuccessDefine } from 'src/common/define/SuccessDefine';
import { RolesGuard } from 'src/auth/guards/Roles.guard';

@Controller('users')
@ApiTags('users API')
@UseGuards(RolesGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @ApiOperation({ summary: '유저 회원가입', description: '유저 회원가입' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-3000']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3000']
  ])
  @Post('register')
  async createUsers(@Body() userData: CreateUsersDto) {
    return await this.usersService.createUser(userData);
  }

  @ApiOperation({ summary: '유저 조회', description: '유저 조회' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-3001']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3000'],
    ErrorDefine['ERROR-3003'],
    ErrorDefine['ERROR-2000'],
  ])
  @ApiBearerAuth('access-token')
  @Get()
  @UseGuards(JwtAuthGuard)
  async getCurrentUser(@CurrentUser() currentUser: UsersDto) {
    return currentUser
  }

  @ApiOperation({ summary: '유저 로그인 성공', description: '유저 로그인 성공' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-3002']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3001'],
    ErrorDefine['ERROR-3002']
  ])
  @Post('login')
  async logIn(
    @Body() userData: LoginDto
  ) {
    const { jwt, user } = await this.usersService.login(userData);
    return {jwt};
  }
}
