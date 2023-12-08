import { Repository } from 'typeorm';
import { UploadsEntity } from '../entities/uplosds.entity';
import { UploadsDto } from '../dto/uploads.dto';
export declare class UploadsRepository {
    private readonly UploadsRepository;
    constructor(UploadsRepository: Repository<UploadsEntity>);
    createImg(uploadsData: UploadsDto): Promise<UploadsEntity | null>;
    isExitsImg(id: any): Promise<UploadsEntity | null>;
}
