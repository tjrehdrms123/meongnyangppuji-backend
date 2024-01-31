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
exports.RolesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const auth_service_1 = require("../auth.service");
const EnumDefine_1 = require("../../common/define/EnumDefine");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
let RolesGuard = class RolesGuard {
    constructor(authService, reflector) {
        this.authService = authService;
        this.reflector = reflector;
    }
    canActivate(context) {
        const noAuth = this.reflector.get('no-auth', context.getHandler());
        if (noAuth) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        return this.validateRequest(request, context);
    }
    async validateRequest(request, context) {
        const checkHeader = request.headers.authorization;
        if (!checkHeader) {
            throw new common_1.UnauthorizedException(ErrorDefine_1.ErrorDefine['ERROR-0009']);
        }
        if (Array.isArray(checkHeader)) {
            throw new common_1.UnauthorizedException(ErrorDefine_1.ErrorDefine['ERROR-0009']);
        }
        const jwtString = checkHeader.split('Bearer ')[1];
        const roles = this.reflector.getAllAndOverride('roles', [
            context.getHandler(),
            context.getClass()
        ]);
        const payload = this.authService.verifyAccessJWT(jwtString);
        const user = payload;
        const newObj = request;
        newObj.user = user;
        if (!roles) {
            return true;
        }
        if (!roles.length) {
            return true;
        }
        else {
            if (roles.includes(user.role) === true) {
                return true;
            }
            else if (user.role === EnumDefine_1.Role.Admin) {
                return true;
            }
            else {
                throw new common_1.UnauthorizedException(ErrorDefine_1.ErrorDefine['ERROR-0001']);
            }
        }
    }
};
RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_service_1.AuthService, core_1.Reflector])
], RolesGuard);
exports.RolesGuard = RolesGuard;
//# sourceMappingURL=Roles.guard.js.map