import { Global, Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controller/auth.controller';
import { UsersRepository } from 'src/users/infra/Users.repository';
import { AuthService } from './service/auth.service';
import { UsersService } from 'src/users/service/Users.service';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      secretOrPrivateKey: process.env.SECRET_KEY,
      signOptions: { expiresIn: '1d' },
    }),
    forwardRef(()=>UsersModule),
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  controllers: [AuthController],
  providers: [
    UsersRepository,
    UsersService,
    AuthService,
    JwtAuthGuard
  ],
  exports: [AuthService, JwtAuthGuard]
})
export class AuthModule {}
