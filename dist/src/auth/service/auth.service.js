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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt = require("jsonwebtoken");
const EnumDefine_1 = require("../../common/define/EnumDefine");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(configService, jwtService) {
        this.configService = configService;
        this.jwtService = jwtService;
    }
    verifyAccessJWT(jwtToken) {
        try {
            const secret = this.configService.get(EnumDefine_1.JWTType.ACCESS);
            const payload = jwt.verify(jwtToken, secret);
            const { id, role } = payload;
            return {
                id,
                role
            };
        }
        catch (e) {
            if (e.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException(ErrorDefine_1.ErrorDefine['ERROR-0007']);
            }
            else {
                throw new common_1.UnauthorizedException(ErrorDefine_1.ErrorDefine['ERROR-0008']);
            }
        }
    }
    async generatorJWT(jwtData, secretKey) {
        return await this.jwtService.signAsync(jwtData, secretKey);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map