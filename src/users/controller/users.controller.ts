import { Body, Controller, Get, HttpStatus, Patch, Post, Put, Res, UseGuards } from '@nestjs/common';
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

@Controller('users')
@ApiTags('users API')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @ApiOperation({ summary: '유저 생성', description: '유저 생성' })
  @SuccessResponse(HttpStatus.OK, [
    {
      model: UsersEntity,
      exampleTitle: '유저 생성 성공 예시',
      exampleDescription: '유저 생성 성공 예시',
      overwriteValue: {
        guardian_id: ResGuardianMetaData
      }
    }   
  ])
  @ErrorResponse(HttpStatus.BAD_REQUEST, [
    ErrorDefine['ERROR-3000'],
    ErrorDefine['ERROR-3003'],
    ErrorDefine['ERROR-2000'],
  ])
  @Post()
  async createUsers(@Body() userData: CreateUsersDto) {
    return await this.usersService.createUser(userData);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async getUserById(@Body() userData: GetUsersDto){
    return await this.usersService.getByMyId(userData);
  }

  @Post('login')
  @SuccessResponse(HttpStatus.OK, [
    {
      model: ResUsersOmitPasswordDto,
      exampleTitle: '유저 로그인 성공 예시',
      exampleDescription: '유저 로그인 성공 예시',
    }   
  ])
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
