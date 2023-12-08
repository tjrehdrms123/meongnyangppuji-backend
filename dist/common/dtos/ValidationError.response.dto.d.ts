export declare class ValidationErrorResponseDto {
    error: string;
    code: string;
    message: string;
    statusCode: number;
    validationErrorInfo: Record<string, Array<string>>;
    constructor(validationErrorInfo: Record<string, Array<string>>);
}
