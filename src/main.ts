import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  BadRequestException,
  ClassSerializerInterceptor,
  Logger,
  ValidationPipe,
} from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import * as expressBasicAuth from 'express-basic-auth';
import * as passport from 'passport';
import * as cookieParser from 'cookie-parser';
import { HttpApiExceptionFilter } from './common/exceptions/http-api-exception.filter';
import * as expressSession from 'express-session';
import { setupSwagger } from './common/utils/swagger';
import { SuccessInterceptor } from './common/exceptions/success.interceptor';
import { setupHelmet } from './common/utils/helmet';
import helmet from 'helmet';

class Application {
  private logger = new Logger(Application.name);
  private DEV_MODE: boolean;
  private PORT: string;
  private corsOriginList: string[];
  private ADMIN_USER: string;
  private ADMIN_PASSWORD: string;
  private SESSION_SECRET_KEY: string;

  constructor(private server: NestExpressApplication) {
    this.server = server;

    if (!process.env.SECRET_KEY) this.logger.error('Set "SECRET" env');
    this.DEV_MODE = process.env.NODE_ENV === 'production' ? false : true;
    this.PORT = process.env.PORT || '5000';
    this.corsOriginList = process.env.CORS_ORIGIN_LIST
      ? process.env.CORS_ORIGIN_LIST.split(',').map((origin) => origin.trim())
      : ['*'];
    this.ADMIN_USER = process.env.ADMIN_USER || 'admin';
    this.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';
    this.SESSION_SECRET_KEY =
      process.env.SESSION_SECRET_KEY || 'SESSION_SECRET_KEY';
  }

  private setUpBasicAuth() {
    this.server.use(
      ['/docs', '/docs-json'],
      expressBasicAuth({
        challenge: true,
        users: {
          [this.ADMIN_USER]: this.ADMIN_PASSWORD,
        },
      }),
    );
  }

  private async setUpGlobalMiddleware() {
    this.server.use(
      helmet({
        contentSecurityPolicy: false,
      }),
    );
    this.server.enableCors({
      origin: this.corsOriginList,
      credentials: true,
    });
    this.server.use(cookieParser());
    this.setUpBasicAuth();
    this.server.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        exceptionFactory: (errors) => {
        const validationErrors = {};
        errors.forEach(error => {
          const constraints = error.constraints;
          if (constraints) {
            validationErrors[error.property] = Object.values(constraints);
              // Read: 에러 객체의 속성 (property)을 키로 사용하여, 해당 속성의 제약 조건 메시지들을 배열로 만들어 저장합니다.
              // Read: 예를 들어, 'age' 필드에 대한 에러가 있다면, validationErrors['age']에 해당 에러 메시지를 배열로 저장합니다.
          }
        });
        return new BadRequestException(validationErrors);
      },
      }),
    );

    this.server.use(
      expressSession({
        secret: this.SESSION_SECRET_KEY,
        resave: true,
        saveUninitialized: true,
      }),
    );

    // 성공시 인터셉터
    this.server.useGlobalInterceptors(new SuccessInterceptor());
    // 예외 필더
    this.server.useGlobalFilters(new HttpApiExceptionFilter());
  }

  async bootstrap() {
    await this.setUpGlobalMiddleware();
    await this.server.listen(this.PORT);
  }

  startLog() {
    if (this.DEV_MODE) {
      this.logger.log(`✅ Server on http://localhost:${this.PORT}`);
    } else {
      this.logger.log(`✅ Server on port ${this.PORT}...`);
    }
  }

  errorLog(error: string) {
    this.logger.error(`🆘 Server error ${error}`);
  }
}

async function init(): Promise<void> {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);
  const app = new Application(server);
  setupSwagger(server);
  await app.bootstrap();
  app.startLog();
}

init().catch((error) => {
  new Logger('init').error(error);
});
