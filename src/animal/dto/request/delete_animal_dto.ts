import { PickType } from '@nestjs/swagger'
import { AnimalEntity } from 'src/animal/animal.entity'

export class DeleteAnimalDto extends PickType(AnimalEntity , ['id'] as const) {
    id: string
}