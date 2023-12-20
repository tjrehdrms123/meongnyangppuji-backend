import {
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { AccessJwtPayload } from '../auth.interface';
import { JWTType } from 'src/common/define/EnumDefine';
import { ErrorDefine } from 'src/common/define/ErrorDefine';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * jwtToken을 받아 복호화 유저의 Id와 권한(Role)을 반환
   * @param jwtToken: JWT KEY
   * @returns {id, role}
   */
  verifyAccessJWT(jwtToken: string): AccessJwtPayload {
    try {
      // Read: JWT SECRET_KEY를 가져옴
      const secret = this.configService.get(JWTType.ACCESS);

      // Read: 복호화 진행
      const payload = jwt.verify(jwtToken, secret) as (
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

  async generatorJWT(payloadObj, secretKeyObj){
    return await this.jwtService.signAsync(payloadObj,secretKeyObj);
  }
}