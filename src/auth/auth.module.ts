import { Global, Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/users.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './auth.controller';
import { UsersRepository } from 'src/users/users.repository';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
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
