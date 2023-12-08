import { HttpException, HttpStatus, Type } from '@nestjs/common';
export interface ErrorResponseOption {
    model: Type<HttpException>;
    exampleTitle: string;
    message: string | Record<string, Array<string>>;
    exampleDescription: string;
    code?: string;
}
export declare const ErrorResponse: (StatusCode: HttpStatus, errorResponseOptions: ErrorResponseOption[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
