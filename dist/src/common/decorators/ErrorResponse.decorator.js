"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ValidationError_1 = require("../dtos/error/ValidationError");
const ErrorCommonResponse_dto_1 = require("../dtos/ErrorCommonResponse.dto");
const HttpExceptionError_response_dto_1 = require("../dtos/HttpExceptionError.response.dto");
const ValidationError_response_dto_1 = require("../dtos/ValidationError.response.dto");
const makeInstanceByApiProperty_1 = require("../utils/makeInstanceByApiProperty");
const ErrorResponse = (StatusCode, errorResponseOptions) => {
    let flagValidationErrorExist = false;
    const examples = errorResponseOptions
        .map((error) => {
        let innerErrorDto;
        if (error.model === ValidationError_1.CustomValidationError) {
            flagValidationErrorExist = true;
            if (typeof error.message === 'string') {
                throw Error('검증오류는 넘겨줄때 Record<string, Array<string>> 타입으로 주셔야합니다.');
            }
            innerErrorDto = new ValidationError_response_dto_1.ValidationErrorResponseDto(error.message);
        }
        else {
            if (typeof error.message !== 'string') {
                throw Error('http오류는 넘겨줄때 string 타입으로 주셔야합니다.');
            }
            innerErrorDto = new HttpExceptionError_response_dto_1.HttpExceptionErrorResponseDto(StatusCode, error.message, error.model.name, error.code);
        }
        const commonErrorInstance = (0, makeInstanceByApiProperty_1.makeInstanceByApiProperty)(ErrorCommonResponse_dto_1.ErrorCommonResponse);
        commonErrorInstance.error = innerErrorDto;
        return {
            [error.exampleTitle]: {
                value: commonErrorInstance,
                description: error.exampleDescription
            }
        };
    })
        .reduce(function (result, item) {
        Object.assign(result, item);
        return result;
    }, {});
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(ErrorCommonResponse_dto_1.ErrorCommonResponse, HttpExceptionError_response_dto_1.HttpExceptionErrorResponseDto, ValidationError_response_dto_1.ValidationErrorResponseDto), (0, swagger_1.ApiResponse)({
        status: StatusCode,
        content: {
            'application/json': {
                schema: {
                    additionalProperties: { $ref: (0, swagger_1.getSchemaPath)(ErrorCommonResponse_dto_1.ErrorCommonResponse) },
                    oneOf: flagValidationErrorExist
                        ? [
                            { $ref: (0, swagger_1.getSchemaPath)(ValidationError_response_dto_1.ValidationErrorResponseDto) },
                            { $ref: (0, swagger_1.getSchemaPath)(HttpExceptionError_response_dto_1.HttpExceptionErrorResponseDto) }
                        ]
                        : [{ $ref: (0, swagger_1.getSchemaPath)(HttpExceptionError_response_dto_1.HttpExceptionErrorResponseDto) }]
                },
                examples: examples
            }
        }
    }));
};
exports.ErrorResponse = ErrorResponse;
//# sourceMappingURL=ErrorResponse.decorator.js.map