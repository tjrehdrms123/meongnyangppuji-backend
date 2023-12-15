import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from 'src/users/entities/users.entity';
import { UsersModule } from 'src/users/users.module';
import { AuthController } from './controller/auth.controller';
import { UsersRepository } from 'src/users/infra/Users.repository';
import { AuthService } from './service/auth.service';
import { UsersService } from 'src/users/service/Users.service';
import { JwtAuthGuard } from 'src/users/guards/jwt.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [
    UsersRepository,
    AuthService,
    UsersService,
    JwtAuthGuard
  ],
  exports: [AuthService, JwtAuthGuard]
})
export class AuthModule {}
