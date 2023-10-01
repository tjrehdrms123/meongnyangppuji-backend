import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { UsersRepository } from '../infra/Users.repository';
import * as bcrypt from 'bcrypt'
import { LoginDto } from '../dto/request/login_dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { GetUsersDto } from '../dto/request/get_users_dto';
import { GuardianRepository } from 'src/guardian/infra/guardian.repository';
import { UsersEntity } from '../entities/users.entity';

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly guardianRepository: GuardianRepository,
    private readonly jwtService: JwtService,
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
    // Read: 2023-10-02 석동근 /회원가입할때 보호자가 없음 그에 따른 주석 처리
      // Exception: 보호자가 있는지 확인 처리
      // const isExitsGuardian = await this.guardianRepository.isExitsGuardian(guardianId);
      // if (!isExitsGuardian) {
      //   throw new BadRequestException(ErrorDefine['ERROR-2000']);
      // }
      
      // // Exception: 동일한 보호자를 가진 회원이 있는지 조회
      // const duplicateGuardianIdUser = await this.usersRepository.findUserByGuardianId(guardianId);
      // if (duplicateGuardianIdUser) {
      //   throw new BadRequestException(ErrorDefine['ERROR-3003']);
      // }

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
      // Read: JWT 토근 발급(토큰을 복호화했을때 유저의 ID가 나옵니다.)
      const jwt = await this.jwtService.signAsync(
        { user_id: user.id },
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
