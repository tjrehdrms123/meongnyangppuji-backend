import { Test, TestingModule } from '@nestjs/testing';
import { AnimalTypeController } from './animal_type.controller';
import { AnimalTypeService } from './animal_type.service';

describe('AnimalTypeController', () => {
  let controller: AnimalTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AnimalTypeController],
      providers: [AnimalTypeService],
    }).compile();

    controller = module.get<AnimalTypeController>(AnimalTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
