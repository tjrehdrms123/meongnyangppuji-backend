import { CommonEntity } from 'src/common/entities/common.entity';
import { UsersEntity } from 'src/users/entities/users.entity';
export declare class GuardianEntity extends CommonEntity {
    name: string;
    phone_number: string;
    users_id: UsersEntity;
}
