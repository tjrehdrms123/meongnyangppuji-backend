import { AnimalEntity } from "src/animal/entities/animal.entity";
import { BaseInterfacAnimalTypeBaseeRepository } from "./base/base.interface.animal_type.repository";


export interface AnimalTypeRepositoryInterface extends BaseInterfacAnimalTypeBaseeRepository<AnimalEntity> {
}