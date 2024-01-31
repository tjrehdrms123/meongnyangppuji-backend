import { OmitType, PickType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { AnimalEntity } from 'src/animal/animal.entity'

export class UpdateAnimalDto extends OmitType(AnimalEntity , [] as const) {
    @IsNotEmpty({ message: 'Animal ID를 입력해주세요.' })
    id: string
}