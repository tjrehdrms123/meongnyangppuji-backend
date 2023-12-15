import { Request } from 'express';
import { Observable } from 'rxjs';
import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UsersService } from 'src/users/service/Users.service';
import { AuthService } from '../service/auth.service';
import { Role } from 'src/common/define/EnumDefine';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private authService: AuthService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request, context);
  }

  private async validateRequest(request: Request, context: ExecutionContext) {
    const checkHeader = request.headers.authorization;
    if (!checkHeader) {
      throw new UnauthorizedException(ErrorDefine['ERROR-0009']);
    }
    if (Array.isArray(checkHeader)) {
      throw new UnauthorizedException(ErrorDefine['ERROR-0009']);
    }
    const jwtString = checkHeader.split('Bearer ')[1];

    // 커스텀 데코레이터로 만든 롤을 가져옴
    // 클래스와 함수 둘다 가져와야함.
    // override 하는이유 ? admin 이 우선 순위를 가져야 하니깐
    const roles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass()
    ]);

    const payload = this.authService.verifyAccessJWT(jwtString);

    // const user = payload
    const user = payload;
    const newObj: any = request;
    newObj.user = user;

    // 롤기반 체크
    if (!roles) {
      return true;
    }
    if (!roles.length) {
      return true;
    } else {
      //console.log(roles);
      if (roles.includes(user.role) === true) {
        return true;
      } else if (user.role === Role.Admin) {
        return true;
      } else {
        throw new UnauthorizedException(ErrorDefine['ERROR-0001']);
      }
    }
  }
}