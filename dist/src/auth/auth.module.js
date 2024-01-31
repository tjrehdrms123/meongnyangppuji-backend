"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("../users/users.entity");
const users_module_1 = require("../users/users.module");
const auth_controller_1 = require("./auth.controller");
const users_repository_1 = require("../users/users.repository");
const auth_service_1 = require("./auth.service");
const users_service_1 = require("../users/users.service");
const jwt_guard_1 = require("../users/guards/jwt.guard");
const jwt_1 = require("@nestjs/jwt");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.SECRET_KEY,
                secretOrPrivateKey: process.env.SECRET_KEY,
                signOptions: { expiresIn: '1d' },
            }),
            (0, common_1.forwardRef)(() => users_module_1.UsersModule),
            typeorm_1.TypeOrmModule.forFeature([users_entity_1.UsersEntity]),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            users_repository_1.UsersRepository,
            users_service_1.UsersService,
            auth_service_1.AuthService,
            jwt_guard_1.JwtAuthGuard
        ],
        exports: [auth_service_1.AuthService, jwt_guard_1.JwtAuthGuard]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map