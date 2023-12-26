"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const SuccessCommonResponse_dto_1 = require("../dtos/SuccessCommonResponse.dto");
const makeInstanceByApiProperty_1 = require("../utils/makeInstanceByApiProperty");
const mergeTwoObj_1 = require("../utils/mergeTwoObj");
const SuccessResponse = (StatusCode, succesResponseOptions) => {
    const examples = succesResponseOptions
        .map((response) => {
        const commonResponseInstance = (0, makeInstanceByApiProperty_1.makeInstanceByApiProperty)(SuccessCommonResponse_dto_1.SuccessCommonResponseDto);
        const DtoModel = response.model;
        const dtoData = (0, makeInstanceByApiProperty_1.makeInstanceByApiProperty)(DtoModel, response.generic);
        if (response.overwriteValue) {
            commonResponseInstance.data = (0, mergeTwoObj_1.mergeObjects)({}, dtoData, response.overwriteValue);
        }
        else {
            commonResponseInstance.data = dtoData;
        }
        return {
            [response.exampleTitle]: {
                value: commonResponseInstance,
                description: response.exampleDescription
            }
        };
    })
        .reduce(function (result, item) {
        Object.assign(result, item);
        return result;
    }, {});
    const extraModel = succesResponseOptions.map(e => {
        return e.model;
    });
    const setOfExtraModel = new Set(extraModel);
    const pathsOfDto = [...setOfExtraModel].map(e => {
        return { $ref: (0, swagger_1.getSchemaPath)(e) };
    });
    const extraGeneric = succesResponseOptions
        .map(e => {
        return e.generic;
    })
        .filter(e => e);
    const pathsOfGeneric = extraGeneric.map(e => {
        return { $ref: (0, swagger_1.getSchemaPath)(e) };
    });
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(...extraModel, ...extraGeneric, SuccessCommonResponse_dto_1.SuccessCommonResponseDto), (0, swagger_1.ApiResponse)({
        status: StatusCode,
        content: {
            'application/json': {
                schema: {
                    additionalProperties: {
                        $ref: (0, swagger_1.getSchemaPath)(SuccessCommonResponse_dto_1.SuccessCommonResponseDto)
                    },
                    oneOf: [...pathsOfDto, ...pathsOfGeneric]
                },
                examples: examples
            }
        }
    }));
};
exports.SuccessResponse = SuccessResponse;
//# sourceMappingURL=SuccessResponse.decorator.js.map