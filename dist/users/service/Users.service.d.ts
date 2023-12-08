import { CreateUsersDto } from '../dto/request/create_users_dto';
import { UsersRepository } from '../infra/Users.repository';
import { LoginDto } from '../dto/request/login_dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { GetUsersDto } from '../dto/request/get_users_dto';
import { GuardianRepository } from 'src/guardian/infra/guardian.repository';
import { UsersEntity } from '../entities/users.entity';
export declare class UsersService {
    private readonly usersRepository;
    private readonly guardianRepository;
    private readonly jwtService;
    private readonly configService;
    private readonly logger;
    constructor(usersRepository: UsersRepository, guardianRepository: GuardianRepository, jwtService: JwtService, configService: ConfigService);
    createUser(userData: CreateUsersDto): Promise<UsersEntity | null>;
    login(userData: LoginDto): Promise<{
        jwt: string;
        user: UsersEntity;
    } | null>;
    getByMyId(userData: GetUsersDto): Promise<UsersEntity | null>;
}
