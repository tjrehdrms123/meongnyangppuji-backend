import { ExceptionFilter, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
export declare class HttpApiExceptionFilter implements ExceptionFilter {
    constructor();
    catch(exception: Error, host: ArgumentsHost): Promise<Response<any, Record<string, any>>>;
}
