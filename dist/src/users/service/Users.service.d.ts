import { CreateUsersDto } from '../dto/request/create_users_dto';
import { UsersRepository } from '../users.repository';
import { LoginDto } from '../dto/request/login_dto';
import { ConfigService } from '@nestjs/config';
import { GetUsersDto } from '../dto/request/get_users_dto';
import { UsersEntity } from '../users.entity';
import { AuthService } from 'src/auth/auth.service';
export declare class UsersService {
    private readonly usersRepository;
    private readonly authService;
    private readonly configService;
    private readonly logger;
    constructor(usersRepository: UsersRepository, authService: AuthService, configService: ConfigService);
    createUser(userData: CreateUsersDto): Promise<UsersEntity | null>;
    login(userData: LoginDto): Promise<{
        jwt: string;
        user: UsersEntity;
    } | null>;
    getByMyId(userData: GetUsersDto): Promise<UsersEntity | null>;
}
