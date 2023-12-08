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
exports.HttpApiExceptionFilter = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const ErrorDefine_1 = require("../define/ErrorDefine");
const ValidationError_1 = require("../dtos/error/ValidationError");
const moment_1 = require("../utils/moment");
const winston_1 = require("../utils/winston");
let HttpApiExceptionFilter = class HttpApiExceptionFilter {
    constructor() { }
    async catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        let statusCode;
        let error;
        if (exception instanceof throttler_1.ThrottlerException) {
            statusCode = 429;
            error = {
                code: ErrorDefine_1.ErrorDefine['Auth-9999'].code,
                message: ErrorDefine_1.ErrorDefine['Auth-9999'].message,
                error: throttler_1.ThrottlerException.name,
                statusCode: 429
            };
        }
        else if (exception instanceof ValidationError_1.CustomValidationError) {
            statusCode = exception.getStatus();
            const getError = exception.getResponse();
            const objError = getError;
            error = Object.assign({}, objError);
        }
        else if (exception instanceof common_1.HttpException) {
            statusCode = exception.getStatus();
            const getError = exception.getResponse();
            if (typeof getError === 'string') {
                error = {
                    error: exception.name,
                    message: getError,
                    statusCode: statusCode
                };
            }
            else {
                const objError = getError;
                error = {
                    code: objError.code,
                    message: getError,
                    error: exception.name,
                    statusCode: statusCode
                };
            }
        }
        else {
            statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
            const errorResponse = {
                timestamp: new Date(),
                path: request.url,
                method: request.method,
                error: {
                    error: 'Internal server error',
                    statusCode: statusCode,
                    message: '서버에러 관리자한테 문의 주세요'
                }
            };
            common_1.Logger.error('ExceptionsFilter', exception.stack, request.method + request.url);
            winston_1.winstonLogger.error(`${(0, moment_1.getToday)()} | ${exception.stack} | ${request.method + request.url}`);
            return response.status(statusCode).json(errorResponse);
        }
        const errorResponse = {
            success: false,
            timestamp: new Date(),
            path: request.url,
            method: request.method,
            error: error
        };
        common_1.Logger.warn('errorResponse', JSON.stringify(errorResponse));
        return response.status(statusCode).json(errorResponse);
    }
};
HttpApiExceptionFilter = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [])
], HttpApiExceptionFilter);
exports.HttpApiExceptionFilter = HttpApiExceptionFilter;
//# sourceMappingURL=http-api-exception.filter.js.map