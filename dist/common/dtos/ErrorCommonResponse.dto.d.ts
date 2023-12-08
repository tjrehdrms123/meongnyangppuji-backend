export declare class ErrorCommonResponse<T> {
    readonly success: boolean;
    readonly timestamp: Date;
    readonly path: string;
    readonly method: string;
    error: T;
}
