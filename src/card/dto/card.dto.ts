import { PartialType } from '@nestjs/swagger'
import { CardEntity } from '../card.entity'
import { AnimalEntity } from 'src/animal/animal.entity'

export class CardDto extends PartialType(CardEntity) {
    background_color: string
    option: string
}
