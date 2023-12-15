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
var UsersService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
const Users_repository_1 = require("../infra/Users.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const guardian_repository_1 = require("../../guardian/infra/guardian.repository");
let UsersService = UsersService_1 = class UsersService {
    constructor(usersRepository, guardianRepository, jwtService, configService) {
        this.usersRepository = usersRepository;
        this.guardianRepository = guardianRepository;
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new common_1.Logger(UsersService_1.name);
    }
    async createUser(userData) {
        const { user_id: userId, password } = userData;
        const duplicateUserId = await this.usersRepository.findById(userId);
        if (duplicateUserId) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-3000']);
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const userHashPasswordData = Object.assign(Object.assign({}, userData), { password: hashedPassword });
        const { user_id: createUserId } = await this.usersRepository.createUser(userHashPasswordData);
        return await this.usersRepository.findById(createUserId);
    }
    async login(userData) {
        const { user_id: userId, password } = userData;
        const user = await this.usersRepository.findById(userId);
        if (!user) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-3001']);
        }
        if (!(await bcrypt.compare(password, user.password)))
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-3002']);
        try {
            const jwt = await this.jwtService.signAsync({
                user_id: user.id,
                role: user.role
            }, { secret: this.configService.get('SECRET_KEY') });
            return { jwt, user };
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getByMyId(userData) {
        return await this.usersRepository.getByMyId(userData);
    }
};
UsersService = UsersService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Users_repository_1.UsersRepository,
        guardian_repository_1.GuardianRepository,
        jwt_1.JwtService,
        config_1.ConfigService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=Users.service.js.map