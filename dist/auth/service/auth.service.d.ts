import { ConfigService } from '@nestjs/config';
import { AccessJwtPayload } from '../auth.interface';
import { JwtService } from '@nestjs/jwt';
import { generatorJWTDto } from '../dto/request/generatorJWT';
export declare class AuthService {
    private configService;
    private readonly jwtService;
    constructor(configService: ConfigService, jwtService: JwtService);
    verifyAccessJWT(jwtToken: string): AccessJwtPayload;
    generatorJWT(jwtData: generatorJWTDto, secretKey: Object): Promise<string>;
}
