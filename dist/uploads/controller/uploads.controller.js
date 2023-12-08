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
exports.UploadsController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const uploads_service_1 = require("../service/uploads.service");
const aws_service_1 = require("../service/aws.service");
const platform_express_1 = require("@nestjs/platform-express");
const SuccessDefine_1 = require("../../common/define/SuccessDefine");
const SuccessResponse_decorator_1 = require("../../common/decorators/SuccessResponse.decorator");
const ErrorResponse_decorator_1 = require("../../common/decorators/ErrorResponse.decorator");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
let UploadsController = class UploadsController {
    constructor(uploadsService, awsService) {
        this.uploadsService = uploadsService;
        this.awsService = awsService;
    }
    async uploadImg(file) {
        return await this.awsService.uploadFileToS3('animal', file);
    }
    async createAnimalProfileImg(imgData) {
        const { imgUrl, imgCropUrl } = imgData;
        return await this.uploadsService.createImg({
            img: imgUrl,
            img_crop: imgCropUrl
        });
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '이미지 업로드', description: '이미지 업로드' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('img')),
    (0, common_1.Post)(),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "uploadImg", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: '반려동물 썸네일 이미지 업로드', description: '반려동물 썸네일 이미지 업로드' }),
    (0, SuccessResponse_decorator_1.SuccessResponse)(common_1.HttpStatus.OK, [SuccessDefine_1.SuccessDefine['SUCCESS-6000']]),
    (0, ErrorResponse_decorator_1.ErrorResponse)(common_1.HttpStatus.BAD_REQUEST, [
        ErrorDefine_1.ErrorDefine['ERROR-3001'],
        ErrorDefine_1.ErrorDefine['ERROR-3002'],
        ErrorDefine_1.ErrorDefine['ERROR-6001'],
    ]),
    (0, common_1.Post)('animal'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UploadsController.prototype, "createAnimalProfileImg", null);
UploadsController = __decorate([
    (0, common_1.Controller)('uploads'),
    (0, swagger_1.ApiTags)('uploads API'),
    __metadata("design:paramtypes", [uploads_service_1.UploadsService,
        aws_service_1.AwsService])
], UploadsController);
exports.UploadsController = UploadsController;
//# sourceMappingURL=uploads.controller.js.map