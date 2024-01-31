import { Repository } from 'typeorm';
import { UsersEntity } from '../users.entity';
import { CreateUsersDto } from '../dto/request/create_users_dto';
import { GetUsersDto } from '../dto/request/get_users_dto';
export declare class UsersRepository {
    private readonly UsersRepository;
    constructor(UsersRepository: Repository<UsersEntity>);
    createUser(userData: CreateUsersDto): Promise<UsersEntity | null>;
    findById(userId: any): Promise<UsersEntity | null>;
    getByMyId(userData: GetUsersDto): Promise<UsersEntity | null>;
}
