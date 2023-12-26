import { UploadsService } from '../service/uploads.service';
import { AwsService } from '../service/aws.service';
export declare class UploadsController {
    private readonly uploadsService;
    private readonly awsService;
    constructor(uploadsService: UploadsService, awsService: AwsService);
    uploadImg(file: any): Promise<{
        key: string;
        s3Object: import("aws-sdk/lib/request").PromiseResult<import("aws-sdk/clients/s3").PutObjectOutput, import("aws-sdk").AWSError>;
        contentType: string;
        url: string;
    }>;
    createAnimalProfileImg(imgData: {
        imgUrl: string;
        imgCropUrl: string;
    }): Promise<import("../entities/uplosds.entity").UploadsEntity>;
}
