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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const Users_service_1 = require("../service/Users.service");
const swagger_1 = require("@nestjs/swagger");
const create_users_dto_1 = require("../dto/request/create_users_dto");
const jwt_guard_1 = require("../guards/jwt.guard");
const login_dto_1 = require("../dto/request/login_dto");
const SuccessResponse_decorator_1 = require("../../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
const user_dto_1 = require("../dto/user.dto");
const SuccessDefine_1 = require("../../common/define/SuccessDefine");
const Roles_guard_1 = require("../../common/guard/Roles.guard");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async createUsers(userData) {
        return await this.usersService.createUser(userData);
    }
    async getCurrentUser(currentUser) {
        return currentUser;
    }
    async logIn(userData) {
        const { jwt, user } = await this.usersService.login(userData);
        return { jwt };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 회원가입', description: '유저 회원가입' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-3000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-3000']
    ]),
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_users_dto_1.CreateUsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createUsers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 조회', description: '유저 조회' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-3001']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-3000'],
        ErrorDefine_1.ErrorDefine['ERROR-3003'],
        ErrorDefine_1.ErrorDefine['ERROR-2000'],
    ]),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UsersDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getCurrentUser", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '유저 로그인 성공', description: '유저 로그인 성공' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-3002']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-3001'],
        ErrorDefine_1.ErrorDefine['ERROR-3002']
    ]),
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "logIn", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, swagger_1.ApiTags)('users API'),
    (0, common_1.UseGuards)(Roles_guard_1.RolesGuard),
    __metadata("design:paramtypes", [Users_service_1.UsersService])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map