import { UploadsDto } from '../dto/uploads.dto';
import { UploadsEntity } from '../entities/uplosds.entity';
import { UploadsRepository } from '../infra/uploads.repository';
export declare class UploadsService {
    private readonly uploadsRepository;
    constructor(uploadsRepository: UploadsRepository);
    createImg(uploadsData: UploadsDto): Promise<UploadsEntity | null>;
}
