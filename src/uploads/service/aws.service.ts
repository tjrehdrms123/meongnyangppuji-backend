import * as path from 'path';
import * as AWS from 'aws-sdk';
import { BadRequestException, Injectable } from '@nestjs/common';
import { PromiseResult } from 'aws-sdk/lib/request';
import { ErrorDefine } from 'src/common/define/ErrorDefine';

// sharp

@Injectable()
export class AwsService {
  private readonly awsS3: AWS.S3;
  public readonly S3_BUCKET_NAME: string;

  constructor() {
    this.awsS3 = new AWS.S3({
      accessKeyId: process.env.S3_ACCESSKEY, // process.env.AWS_S3_ACCESS_KEY
      secretAccessKey: process.env.S3_SECERTKEY,
      region: process.env.S3_REGION,
    });
    this.S3_BUCKET_NAME = process.env.S3_BUCKET; // nest-s3
  }

  /**
   * POST: 이미지 업로드
   * @param folder 폴더 명
   * @param file 이미지 객체
   * @returns S3 imgUrl
   */
  async uploadFileToS3(
    folder: string,
    file: Express.Multer.File,
  ): Promise<{
    key: string;
    s3Object: PromiseResult<AWS.S3.PutObjectOutput, AWS.AWSError>;
    contentType: string;
    url: string;
  }> {
    // Exception: 프로필 이미지를 업로드하지 않았을 시
    if(!file?.[0]){
      throw new BadRequestException(ErrorDefine['ERROR-6001']);
    }
    try {
      const key = `${process.env.S3_BASEFOLDER}/${folder}/${Date.now()}_${path.basename(
        file[0].originalname,
      )}`.replace(/ /g, '');
      // 공백을 제거해주는 정규식

      const s3Object = await this.awsS3
        .putObject({
          Bucket: this.S3_BUCKET_NAME,
          Key: key,
          Body: file[0].buffer,
          ACL: 'public-read',
          ContentType: file[0].mimetype,
        })
        .promise();
        const imgUrl = `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${key}`;
      return { key, s3Object, contentType: file[0].mimetype, url: imgUrl };
    } catch (error) {
      throw new BadRequestException(`File upload failed : ${error}`);
    }
  }

  async deleteS3Object(
    key: string,
    callback?: (err: AWS.AWSError, data: AWS.S3.DeleteObjectOutput) => void,
  ): Promise<{ success: true }> {
    try {
      await this.awsS3
        .deleteObject(
          {
            Bucket: this.S3_BUCKET_NAME,
            Key: key,
          },
          callback,
        )
        .promise();
      return { success: true };
    } catch (error) {
      throw new BadRequestException(`Failed to delete file : ${error}`);
    }
  }

  public getAwsS3FileUrl(objectKey: string) {
    return `https://${this.S3_BUCKET_NAME}.s3.amazonaws.com/${objectKey}`;
  }
}