import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  UnauthorizedException,
} from '@nestjs/common'
import { Request } from 'express'
import { map, Observable } from 'rxjs'
import { ErrorDefine } from '../define/ErrorDefine'

@Injectable()
export class OnlyPrivateInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request: Request = context.switchToHttp().getRequest()
    const user = request.user
    if (user) return next.handle().pipe(map((data) => data))
    else throw new UnauthorizedException(ErrorDefine['ERROR-0002'])
  }
}
