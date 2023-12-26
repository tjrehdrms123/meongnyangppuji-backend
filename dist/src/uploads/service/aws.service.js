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
exports.AwsService = void 0;
const path = require("path");
const AWS = require("aws-sdk");
const common_1 = require("@nestjs/common");
const ErrorDefine_1 = require("../../common/define/ErrorDefine");
let AwsService = class AwsService {
    constructor() {
        this.awsS3 = new AWS.S3({
            accessKeyId: process.env.S3_ACCESSKEY,
            secretAccessKey: process.env.S3_SECERTKEY,
            region: process.env.S3_REGION,
        });
        this.S3_BUCKET_NAME = process.env.S3_BUCKET;
    }
    async uploadFileToS3(folder, file) {
        if (!file) {
            throw new common_1.BadRequestException(ErrorDefine_1.ErrorDefine['ERROR-6001']);
        }
        try {
            const key = `${process.env.S3_BASEFOLDER}/${folder}/${Date.now()}_${path.basename(file.originalname)}`.replace(/ /g, '');
            const s3Object = await this.awsS3
                .putObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
                Body: file.buffer,
                ACL: 'public-read',
                ContentType: file.mimetype,
            })
                .promise();
            const imgUrl = `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
            return { key, s3Object, contentType: file.mimetype, url: imgUrl };
        }
        catch (error) {
            throw new common_1.BadRequestException(`File upload failed : ${error}`);
        }
    }
    async deleteS3Object(key, callback) {
        try {
            await this.awsS3
                .deleteObject({
                Bucket: this.S3_BUCKET_NAME,
                Key: key,
            }, callback)
                .promise();
            return { success: true };
        }
        catch (error) {
            throw new common_1.BadRequestException(`Failed to delete file : ${error}`);
        }
    }
    getAwsS3FileUrl(objectKey) {
        return `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${objectKey}`;
    }
};
AwsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AwsService);
exports.AwsService = AwsService;
//# sourceMappingURL=aws.service.js.map