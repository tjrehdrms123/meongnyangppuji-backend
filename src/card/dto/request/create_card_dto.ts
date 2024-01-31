import { OmitType, PickType } from '@nestjs/swagger'
import { CardEntity } from 'src/card/card.entity';

export class CreateCardDto extends PickType(CardEntity, ['background_color','option'] as const) {}