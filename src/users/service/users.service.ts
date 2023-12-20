import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { UsersRepository } from '../infra/Users.repository';
import * as bcrypt from 'bcrypt'
import { LoginDto } from '../dto/request/login_dto';
import { ConfigService } from '@nestjs/config';
import { GetUsersDto } from '../dto/request/get_users_dto';
import { GuardianRepository } from 'src/guardian/infra/guardian.repository';
import { UsersEntity } from '../entities/users.entity';
import { AuthService } from 'src/auth/service/auth.service';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  // POST: 유저 등록
  async createUser(userData: CreateUsersDto): Promise<UsersEntity | null> {
    const { user_id: userId, password } = userData;
    // Exception: 동일한 회원명 처리
    const duplicateUserId = await this.usersRepository.findById(userId);
    if (duplicateUserId) {
      throw new BadRequestException(ErrorDefine['ERROR-3000']);
    }

    // Read: 비밀번호 해시화 후 대조
    const hashedPassword = await bcrypt.hash(password, 10);
    const userHashPasswordData = {
      ...userData,
      password: hashedPassword
    }

    const { user_id: createUserId } = await this.usersRepository.createUser(userHashPasswordData);
    return await this.usersRepository.findById(createUserId);
  }

  // POST: 유저 로그인
  async login(userData: LoginDto): Promise<{jwt: string, user: UsersEntity} | null> {
    const { user_id: userId, password } = userData;
    const user = await this.usersRepository.findById(userId);
    // Exception: 동일한 ID를 가진 유저가 없을시
    if(!user){
      throw new BadRequestException(ErrorDefine['ERROR-3001']);
    }
    // Exception: 비밀번호가 갖지 않을시
    if (!(await bcrypt.compare(password, user.password)))
      throw new BadRequestException(ErrorDefine['ERROR-3002']);
    try {
      // Read: JWT 토근 발급(토큰을 복호화했을때 유저의 ID, Role(회원 권한)이 나옵니다.)
      const jwt = await this.authService.generatorJWT(
        { 
          user_id: user.id,
          role: user.role 
        },
        { secret: this.configService.get('SECRET_KEY') },
      )
      return { jwt, user }
    } catch (error) {
      throw new BadRequestException(error.message)
    }
  }

  // GET: ID에 해당 하는 유저 반환
  // @CurrentUser()로 대신 사용중 현재 사용하고 있지 않음
  async getByMyId(userData: GetUsersDto): Promise<UsersEntity | null> {
    return await this.usersRepository.getByMyId(userData);
  }
}
