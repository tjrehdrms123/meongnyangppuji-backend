import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { UsersRepository } from '../infra/Users.repository';
import * as bcrypt from 'bcrypt'
import { LoginDto } from '../dto/request/login_dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { GetUsersDto } from '../dto/request/get_users_dto';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(userData: CreateUsersDto){
    const { user_id: userId, password  } = userData;
    const user = await this.usersRepository.findByUserId(userId);
    if(user){
      // 동일한 유저의 아이디가 존재할떄
      throw new BadRequestException(ErrorDefine['ERROR-3000']);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const userHashPasswordData = {
      ...userData,
      password: hashedPassword
    }
    return await this.usersRepository.createUser(userHashPasswordData);
  }

  async login(userData: LoginDto) {
    const { user_id: userId, password } = userData;
    const user = await this.usersRepository.findByUserId(userId);
    if (!user)
      // 회원이 존재하지 않습니다.
      throw new BadRequestException(ErrorDefine['ERROR-3001']);
    if (!(await bcrypt.compare(password, user.password)))
      // 비밀번호가 같지 않을시 : 로그인 실패
      throw new BadRequestException(ErrorDefine['ERROR-3002']);
    try {
      const jwt = await this.jwtService.signAsync(
        { sub: user.id },
        { secret: this.configService.get('SECRET_KEY') },
      )
      return { jwt, user }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  async getByMyId(userData: GetUsersDto){
    return await this.usersRepository.getByMyId(userData);
  }
}
