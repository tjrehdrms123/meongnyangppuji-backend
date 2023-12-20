import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controller/users.controller';
import { UsersEntity } from './entities/users.entity';
import { JwtStrategy } from './guards/jwt.strategy';
import { UsersRepository } from './infra/Users.repository';
import { UsersService } from './service/Users.service';
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { GuardianModule } from 'src/guardian/guardian.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
    GuardianModule,
    forwardRef(() => AuthModule)
  ],
  controllers: [UsersController],
  providers: [UsersRepository, UsersService, JwtStrategy],
  exports: [UsersRepository]
})
export class UsersModule {}
