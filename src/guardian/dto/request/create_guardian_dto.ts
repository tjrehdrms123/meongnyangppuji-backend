import { ApiProperty, PartialType, PickType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { GuardianEntity } from 'src/guardian/entities/guardian.entity'

export class CreateGuardianDto extends PickType(GuardianEntity , ['name','phone_number'] as const) {
    @IsNotEmpty({ message: '보호자 이름을 입력해주세요.' })
    name: string
    @IsNotEmpty({ message: '보호자의 전화번호를 입력해주세요.' })
    phone_number: string
}