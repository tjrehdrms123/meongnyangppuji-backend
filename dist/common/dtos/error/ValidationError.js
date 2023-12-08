"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomValidationError = void 0;
const common_1 = require("@nestjs/common");
class CustomValidationError extends common_1.HttpException {
    constructor(valdationErrorArray) {
        const objectsOfError = valdationErrorArray
            .map((error) => {
            const constrains = error.constraints;
            if (!constrains)
                return null;
            const constrainsErrorStrings = Object.keys(constrains).map(key => constrains[key]);
            return { [error.property]: constrainsErrorStrings };
        })
            .filter(e => e)
            .reduce(function (result, item) {
            if (!item)
                return result;
            if (!result)
                return result;
            Object.assign(result, item);
            return result;
        }, {});
        super({
            error: 'ValidationError',
            message: '검증 오류',
            validationErrorInfo: objectsOfError,
            statusCode: common_1.HttpStatus.BAD_REQUEST,
            code: 'ValidationError'
        }, common_1.HttpStatus.BAD_REQUEST);
        this.name = 'ValidationError';
    }
}
exports.CustomValidationError = CustomValidationError;
//# sourceMappingURL=ValidationError.js.map