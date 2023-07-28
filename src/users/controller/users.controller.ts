import { Body, Controller, Get, HttpStatus, Patch, Post, Put, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express'
import { UsersService } from '../service/Users.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { JwtAuthGuard } from '../guards/jwt.guard';
import { LoginDto } from '../dto/request/login_dto';
import { GetUsersDto } from '../dto/request/get_users_dto';

@Controller('users')
@ApiTags('users API')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  
  @ApiOperation({ summary: '유저 생성', description: '유저 생성' })
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
  async logIn(
    @Body() userData: LoginDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const { jwt, user } = await this.usersService.login(userData);
    response.cookie('jwt', jwt, { httpOnly: true });
    console.log('user:',user);
    return user;
  }

  @Post('logout')
  async logOut(@Res({ passthrough: true }) response: Response) {
    response.clearCookie('jwt');
  }
}
