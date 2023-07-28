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

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name);
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly guardianRepository: GuardianRepository,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async createUser(userData: CreateUsersDto){
    const { user_id: userId, password, guardian_id: guardianId } = userData;
    // 동일한 회원명 처리
    const duplicateUserId = await this.usersRepository.findById(userId);
    if (duplicateUserId) {
      throw new BadRequestException(ErrorDefine['ERROR-3000']);
    }
    
    // TODO: 보호자가 있는지 확인 처리
    const isExitsGuardian = await this.guardianRepository.isExitsGuardian(guardianId);
    if (!isExitsGuardian) {
      throw new BadRequestException(ErrorDefine['ERROR-2000']);
    }
    
    // 동일한 보호자를 가진 회원이 있는지 조회
    const duplicateGuardianIdUser = await this.usersRepository.findUserByGuardianId(guardianId);
    if (duplicateGuardianIdUser) {
      throw new BadRequestException(ErrorDefine['ERROR-3003']);
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
    const user = await this.usersRepository.findById(userId);
    if(!user){
      throw new BadRequestException(ErrorDefine['ERROR-3001']);
    }
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
