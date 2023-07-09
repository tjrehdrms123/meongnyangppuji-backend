import { Injectable } from "@nestjs/common";
import { AnimalTypeEntity } from "../entities/animal_type.entity";
import { Repository } from "typeorm";
import { BaseAbstractAnimalRepository } from "./base/base.abstract.animal_type.repository";
import { AnimalTypeRepositoryInterface } from "./animal_type.repository.interface";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AnimalTypeRepository extends BaseAbstractAnimalRepository<AnimalTypeEntity> implements AnimalTypeRepositoryInterface {

  constructor(@InjectRepository(AnimalTypeEntity)
              private readonly AnimalRepository: Repository<AnimalTypeEntity>,
  ) {
    super(AnimalRepository);
  }

}