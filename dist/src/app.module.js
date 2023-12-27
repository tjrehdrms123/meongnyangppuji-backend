"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const Joi = require("joi");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const app_controller_1 = require("./app.controller");
const animal_type_module_1 = require("./animal_type/animal_type.module");
const throttler_1 = require("@nestjs/throttler");
const guardian_module_1 = require("./guardian/guardian.module");
const users_module_1 = require("./users/users.module");
const qr_module_1 = require("./qr/qr.module");
const animal_module_1 = require("./animal/animal.module");
const guardian_animal_module_1 = require("./guardian_animal/guardian_animal.module");
const uplosds_module_1 = require("./uploads/uplosds.module");
const card_module_1 = require("./card/card.module");
const auth_module_1 = require("./auth/auth.module");
const typeOrmModuleOptions = {
    useFactory: async (configService) => ({
        namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
        type: configService.get('DB_TYPE'),
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: process.env.NODE_ENV === 'development' ? configService.get('DB_PASSWORD') : configService.get('DB_PASSWORD_PRO'),
        database: configService.get('DB_NAME'),
        entities: ['dist/**/*.entity.js'],
        synchronize: false,
        autoLoadEntities: true,
        logging: true,
        keepConnectionAlive: true,
        charset: 'utf8mb4_general_ci',
    }),
    inject: [config_1.ConfigService],
};
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
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
            typeorm_1.TypeOrmModule.forRootAsync(typeOrmModuleOptions),
            auth_module_1.AuthModule,
            animal_type_module_1.AnimalTypeModule,
            guardian_module_1.GuardianModule,
            users_module_1.UsersModule,
            qr_module_1.QrModule,
            animal_module_1.AnimalModule,
            guardian_animal_module_1.GuardianAnimalModule,
            uplosds_module_1.UploadsModule,
            card_module_1.CardModule,
            users_module_1.UsersModule,
            throttler_1.ThrottlerModule.forRoot({
                ttl: process.env.NODE_ENV === 'production' ? 300 : 60,
                limit: 3
            }),
        ],
        controllers: [app_controller_1.AppController],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map