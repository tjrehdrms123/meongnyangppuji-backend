import { CommonEntity } from 'src/common/entities/common.entity';
import { Role } from 'src/common/define/EnumDefine';
export declare class UsersEntity extends CommonEntity {
    user_id: string;
    password: string;
    role: Role;
    consent_check: boolean;
    privacy_policy_check: boolean;
}
