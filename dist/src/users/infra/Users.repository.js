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
exports.UsersRepository = void 0;
const typeorm_1 = require("typeorm");
const common_1 = require("@nestjs/common");
const typeorm_2 = require("@nestjs/typeorm");
const users_entity_1 = require("../users.entity");
let UsersRepository = class UsersRepository {
    constructor(UsersRepository) {
        this.UsersRepository = UsersRepository;
    }
    async createUser(userData) {
        return await this.UsersRepository.save(userData);
    }
    async findById(userId) {
        const user = await this.UsersRepository.findOne({ where: { user_id: userId } });
        return user;
    }
    async getByMyId(userData) {
        const user = await this.UsersRepository.find({
            where: {
                id: userData.user_id
            }
        });
        return user[0];
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(users_entity_1.UsersEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=Users.repository.js.map