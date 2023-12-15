import { ConfigService } from '@nestjs/config';
import { AccessJwtPayload } from '../auth.interface';
export declare class AuthService {
    private configService;
    constructor(configService: ConfigService);
    verifyAccessJWT(jwtString: string): AccessJwtPayload;
}
