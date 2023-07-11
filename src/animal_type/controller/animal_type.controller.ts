import { Body, Controller, Get } from '@nestjs/common';
import { AnimalTypeService } from '../service/animal_type.service';
import { CreateAnimalTypeDto } from '../dto/create_animal_type_dto';

@Controller('animal_type')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}
  @Get()
  async createAnimalType(@Body() animalTypeData: CreateAnimalTypeDto) {
    return await this.animalTypeService.createAnimalType(animalTypeData);
  }
}
