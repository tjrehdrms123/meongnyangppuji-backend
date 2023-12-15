import {
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { AccessJwtPayload } from '../auth.interface';
import { JWTType } from 'src/common/define/EnumDefine';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
  ) {}

  verifyAccessJWT(jwtString: string): AccessJwtPayload {
    try {
      const secret = this.configService.get(JWTType.ACCESS);

      const payload = jwt.verify(jwtString, secret) as (
        | jwt.JwtPayload
        | string
      ) &
        AccessJwtPayload;
      const { id, role } = payload;

      return {
        id,
        role
      };
    } catch (e) {
      if (e.name === 'TokenExpiredError'){
        throw new UnauthorizedException(ErrorDefine['ERROR-0007']);
      } else {
        throw new UnauthorizedException(ErrorDefine['ERROR-0008']);
      }
    }
  }
}