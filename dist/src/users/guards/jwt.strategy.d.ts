import { JwtPayload } from './jwt.payload';
import { ConfigService } from '@nestjs/config';
import { UsersRepository } from '../users.repository';
import { Strategy } from 'passport-jwt';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly usersRepository;
    private readonly configService;
    constructor(usersRepository: UsersRepository, configService: ConfigService);
    validate(payload: JwtPayload): Promise<import("../users.entity").UsersEntity>;
}
export {};
