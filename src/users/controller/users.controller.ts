import { Body, Controller, Get, HttpStatus, Patch, Post, Put, Res, UseGuards, UseInterceptors } from '@nestjs/common';
import { Response } from 'express'
import { UsersService } from '../service/Users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { LoginDto } from '../dto/request/login_dto';
import { GetUsersDto } from '../dto/request/get_users_dto';
import { SuccessResponse } from 'src/common/decorators/SuccessResponse.decorator';
import { ErrorResponse } from 'src/common/decorators/ErrorResponse.decorator';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { ResUsersOmitPasswordDto } from '../dto/response/res_users_dto';
import { UsersEntity } from '../entities/users.entity';
import { ResGuardianMetaData } from 'src/guardian/dto/response/res_guardian_dto';
import { OnlyPrivateInterceptor } from 'src/common/interceptors/only-private.interceptor';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { UsersDto } from '../dto/user.dto';
import { SuccessDefine } from 'src/common/define/SuccessDefine';

@Controller('users')
@ApiTags('users API')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @ApiOperation({ summary: '유저 회원가입', description: '유저 회원가입' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-3000']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3000'],
    ErrorDefine['ERROR-3003'],
    ErrorDefine['ERROR-2000'],
  ])
  @Post()
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
  @Get()
  @UseGuards(JwtAuthGuard)
  // @UseInterceptors(OnlyPrivateInterceptor)
  async getCurrentUser(@CurrentUser() currentUser: UsersDto) {
    return currentUser
  }

  @Post('login')
  @ApiOperation({ summary: '유저 로그인 성공', description: '유저 로그인 성공' })
  @SuccessResponse(HttpStatus.OK, [SuccessDefine['SUCCESS-3002']])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3001'],
    ErrorDefine['ERROR-3002']
  ])
  async logIn(
    @Body() userData: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { jwt, user } = await this.usersService.login(userData);
    response.cookie('jwt', jwt, { httpOnly: true });
    return user;
  }

  @Post('logout')
  async logOut(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
  }
}
