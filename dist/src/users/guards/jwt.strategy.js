"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const users_repository_1 = require("../users.repository");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const passport_jwt_1 = require("passport-jwt");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor(usersRepository, configService) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: configService.get('SECRET_KEY'),
            ignoreExpiration: false,
        });
        this.usersRepository = usersRepository;
        this.configService = configService;
    }
    async validate(payload) {
        try {
            const { user_id } = payload;
            const user = this.usersRepository.getByMyId({ user_id });
            if (user) {
                return user;
            }
            else {
                throw new common_1.UnauthorizedException(ErrorDefine_1.ErrorDefine['ERROR-0004']);
            }
        }
        catch (error) {
            throw new common_1.UnauthorizedException(error);
        }
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository,
        config_1.ConfigService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map