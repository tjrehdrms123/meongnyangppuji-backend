import { HttpException, ValidationError } from '@nestjs/common';
export declare class CustomValidationError extends HttpException {
    name: string;
    constructor(valdationErrorArray: ValidationError[]);
}
