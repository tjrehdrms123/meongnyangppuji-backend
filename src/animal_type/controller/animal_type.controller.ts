import { Controller } from '@nestjs/common';
import { AnimalTypeService } from './animal_type.service';

@Controller('animal-type')
export class AnimalTypeController {
  constructor(private readonly animalTypeService: AnimalTypeService) {}
}
