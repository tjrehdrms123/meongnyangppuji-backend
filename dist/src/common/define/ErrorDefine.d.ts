import { ErrorResponseOption } from 'src/common/decorators/ErrorResponse.decorator';
type Keys = 'ERROR-0001' | 'ERROR-0002' | 'ERROR-0003' | 'ERROR-0004' | 'ERROR-0005' | 'ERROR-0006' | 'ERROR-0007' | 'ERROR-0008' | 'ERROR-0009' | 'ERROR-9999' | 'ERROR-1000' | 'ERROR-1001' | 'ERROR-1002' | 'ERROR-2000' | 'ERROR-3000' | 'ERROR-3001' | 'ERROR-3002' | 'ERROR-3003' | 'ERROR-4000' | 'ERROR-5000' | 'ERROR-6000' | 'ERROR-6001' | 'ERROR-7000';
export declare const ErrorDefine: Record<Keys, ErrorResponseOption & {
    code: string;
}>;
export {};
