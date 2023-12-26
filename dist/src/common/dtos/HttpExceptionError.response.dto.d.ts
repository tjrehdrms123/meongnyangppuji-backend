export declare class HttpExceptionErrorResponseDto {
    error: string;
    message: any;
    statusCode: number;
    code?: string;
    constructor(statusCode: number, error: string, message: any, code?: string);
}
