import { JwtPayload } from './jwt.payload'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { jwtExtractorFromCookies } from '../../common/utils/jwtExtractorFromCookies'
import { ConfigService } from '@nestjs/config'
import { UsersRepository } from '../infra/Users.repository'
import { ErrorDefine } from 'src/common/define/ErrorDefine'
import { ExtractJwt, Strategy } from 'passport-jwt'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([jwtExtractorFromCookies]),
      secretOrKey: configService.get('SECRET_KEY'),
      ignoreExpiration: false,
    })
  }

  async validate(payload: JwtPayload) {
    try {
      const { user_id } = payload;
      const user = this.usersRepository.getByMyId({user_id});
      if (user) {
        return user
      } else {
        throw new UnauthorizedException(ErrorDefine['ERROR-0004']);
      }
    } catch (error) {
      throw new UnauthorizedException(error)
    }
  }
}
