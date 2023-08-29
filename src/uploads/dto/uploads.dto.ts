import { PickType } from '@nestjs/swagger'
import { UploadsEntity } from '../entities/uplosds.entity';

export class UploadsDto extends PickType(UploadsEntity , ['img','img_crop'] as const) {}