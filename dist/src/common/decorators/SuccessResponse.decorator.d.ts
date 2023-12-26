import { HttpStatus, Type } from '@nestjs/common';
export interface SuccessResponseOption {
    model: Type<any>;
    exampleTitle: string;
    overwriteValue?: Record<string, any>;
    exampleDescription: string;
    generic?: Type<any>;
}
export declare const SuccessResponse: (StatusCode: HttpStatus, succesResponseOptions: SuccessResponseOption[]) => <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
