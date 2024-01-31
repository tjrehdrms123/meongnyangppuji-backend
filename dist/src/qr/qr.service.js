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
var QrService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrService = void 0;
const common_1 = require("@nestjs/common");
const qr_repository_1 = require("./qr.repository");
let QrService = QrService_1 = class QrService {
    constructor(qrRepository) {
        this.qrRepository = qrRepository;
        this.logger = new common_1.Logger(QrService_1.name);
    }
    async createQr(qrData) {
        return await this.qrRepository.createQr(qrData);
    }
    async updateQr(qrData) {
        return await this.qrRepository.updateQr(qrData);
    }
    async deleteQr(qrData) {
        return await this.qrRepository.deleteQr(qrData);
    }
};
QrService = QrService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [qr_repository_1.QrRepository])
], QrService);
exports.QrService = QrService;
//# sourceMappingURL=qr.service.js.map