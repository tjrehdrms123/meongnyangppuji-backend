import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { AnimalRepository } from '../infra/animal.repository';
import { AnimalEntity } from '../entities/animal.entity';
import { CreateAnimalDto } from '../dto/request/create_animal_dto';
import { UpdateAnimalDto } from '../dto/request/update_qr_dto';
import { DeleteAnimalDto } from '../dto/request/delete_qr_dto';
import { GetAnimalDto } from '../dto/request/get_animal_dto';

@Injectable()
export class AnimalService {
  private readonly logger = new Logger(AnimalService.name);
  constructor(
    private readonly animalRepository: AnimalRepository,
  ) {}

  // POST: Animal 등록
  async createAnimal(animalDto: CreateAnimalDto): Promise<AnimalEntity | null> {
    return await this.animalRepository.createAnimal(animalDto);
  }

  // UPDATE: Animal 정보 수정
  async updateAnimal(animalDto: UpdateAnimalDto): Promise<AnimalEntity | null> {
    return await this.animalRepository.updateAnimal(animalDto);
  }

  // DELETE: Animal 삭제
  async deleteAnimal(animalDto: DeleteAnimalDto): Promise<any> {
    return await this.animalRepository.deleteAnimal(animalDto);
  }

  // GET: Animal 가져오기
  async getAniaml(animalData: GetAnimalDto) {
    const animal = this.animalRepository.getAniaml(animalData)
  }
}