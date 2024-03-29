import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm'
import * as Joi from 'joi'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { AppController } from './app.controller'
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { ThrottlerModule } from '@nestjs/throttler'
import { GuardianModule } from './guardian/guardian.module';
import { UsersModule } from './users/users.module';
import { QrModule } from './qr/qr.module'
import { AnimalModule } from './animal/animal.module'
import { GuardianAnimalModule } from './guardian_animal/guardian_animal.module'
import { UploadsModule } from './uploads/uplosds.module'
import { CardModule } from './card/card.module'
import { AuthModule } from './auth/auth.module'
import { dataSourceOptions } from 'db/data-source'

const typeOrmModuleOptions = {
  useFactory: async (
    configService: ConfigService,
  ): Promise<Object> => ({
    namingStrategy: new SnakeNamingStrategy(),
    type: configService.get('DB_TYPE'),
    host: configService.get('DB_HOST'), // process.env.DB_HOST
    port: configService.get('DB_PORT'),
    username: configService.get('DB_USERNAME'),
    password: process.env.NODE_ENV === 'development' ? configService.get('DB_PASSWORD') : configService.get('DB_PASSWORD_PRO'),
    database: configService.get('DB_NAME'),
    entities: ['dist/**/*.entity.js'],
    synchronize: false, //! set 'false' in production
    autoLoadEntities: true,
    logging: true,
    keepConnectionAlive: true,
    charset: 'utf8mb4_general_ci',
  }),
  inject: [ConfigService],
}

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production', 'test', 'provision')
          .default('development'),
        PORT: Joi.number().default(5000),
        SECRET_KEY: Joi.string().required(),
        ADMIN_USER: Joi.string().required(),
        ADMIN_PASSWORD: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync(typeOrmModuleOptions),
    AuthModule,
    AnimalTypeModule,
    GuardianModule,
    UsersModule,
    QrModule,
    AnimalModule,
    GuardianAnimalModule,
    UploadsModule,
    CardModule,
    UsersModule,
    ThrottlerModule.forRoot({
      ttl: process.env.NODE_ENV === 'production' ? 300 : 60,
      limit: 3
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
