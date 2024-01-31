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
import { UsersService } from 'src/users/users.service';
import { AuthService } from '../auth.service';
import { Role } from 'src/common/define/EnumDefine';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private authService: AuthService, private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    // Read: @NoAuth 사용시 해당 부분에서 AccessTokenGuard 사용 해제시킴 - 비회원을 위해
    const noAuth = this.reflector.get<boolean>('no-auth', context.getHandler());
    if (noAuth) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request, context);
  }

  /**
   * Admin 권한 체크 데코레이터
   * @param request 
   * @param context 
   * @returns 
   */
  private async validateRequest(request: Request, context: ExecutionContext) {
    const checkHeader = request.headers.authorization;
    if (!checkHeader) {
      // Exception: 잘못된 헤더 요청
      throw new UnauthorizedException(ErrorDefine['ERROR-0009']);
    }
    if (Array.isArray(checkHeader)) {
      // Exception: 잘못된 헤더 요청
      throw new UnauthorizedException(ErrorDefine['ERROR-0009']);
    }
    const jwtString = checkHeader.split('Bearer ')[1];

    // Read: 커스텀 데코레이터로 만든 롤을 가져옴, 클래스와 함수 둘다 가져와야함,override 하는이유 ? admin 이 우선 순위를 가져야 하니깐
    const roles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass()
    ]);

    // Read: id, role을 가져옴
    const payload = this.authService.verifyAccessJWT(jwtString);

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
      if (roles.includes(user.role) === true) {
        return true;
      } else if (user.role === Role.Admin) {
        return true;
      } else {
        // Exception: Admin이 아닐 경우 권한 부족
        throw new UnauthorizedException(ErrorDefine['ERROR-0001']);
      }
    }
  }
}