import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersEntity } from './users.entity';
import { JwtStrategy } from './guards/jwt.strategy';
import { UsersRepository } from './users.repository';
import { UsersService } from './users.service';
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
