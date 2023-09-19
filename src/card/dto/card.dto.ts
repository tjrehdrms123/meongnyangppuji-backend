import { PartialType } from '@nestjs/swagger'
import { CardEntity } from '../entities/card.entity'
import { AnimalEntity } from 'src/animal/entities/animal.entity'

export class CardDto extends PartialType(CardEntity) {
    background_color: string
    option: number
}
