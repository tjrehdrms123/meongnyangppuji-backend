import { OmitType, PickType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { CardEntity } from 'src/card/entities/card.entity'

export class UpdateCardDto extends OmitType(CardEntity , [] as const) {
    @IsNotEmpty({ message: 'Card ID를 입력해주세요.' })
    id: string
}