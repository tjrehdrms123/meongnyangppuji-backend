"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_controller_1 = require("./controller/users.controller");
const users_entity_1 = require("./entities/users.entity");
const jwt_strategy_1 = require("./guards/jwt.strategy");
const Users_repository_1 = require("./infra/Users.repository");
const Users_service_1 = require("./service/Users.service");
const passport_1 = require("@nestjs/passport");
const jwt_1 = require("@nestjs/jwt");
const guardian_module_1 = require("../guardian/guardian.module");
const auth_module_1 = require("../auth/auth.module");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.UsersEntity]),
            passport_1.PassportModule.register({ defaultStrategy: 'jwt', session: true }),
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_KEY,
                secretOrPrivateKey: process.env.SECRET_KEY,
                signOptions: { expiresIn: '1d' },
            }),
            guardian_module_1.GuardianModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule)
        ],
        controllers: [users_controller_1.UsersController],
        providers: [Users_repository_1.UsersRepository, Users_service_1.UsersService, jwt_strategy_1.JwtStrategy],
        exports: [Users_repository_1.UsersRepository]
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map