import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/request/create_users_dto';
import { LoginDto } from './dto/request/login_dto';
import { UsersDto } from './dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUsers(userData: CreateUsersDto): Promise<import("./users.entity").UsersEntity>;
    getCurrentUser(currentUser: UsersDto): Promise<UsersDto>;
    logIn(userData: LoginDto): Promise<{
        jwt: string;
    }>;
}
