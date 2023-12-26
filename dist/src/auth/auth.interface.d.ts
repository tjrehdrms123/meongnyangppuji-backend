import { Role } from "src/common/define/EnumDefine";
export interface AccessJwtPayload {
    id: number;
    role: Role;
}
