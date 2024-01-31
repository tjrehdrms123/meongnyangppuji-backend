import { PickType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { GuardianEntity } from 'src/guardian/guardian.entity'

export class UpdateGuardianDto extends PickType(GuardianEntity , ['name','phone_number'] as const) {
    @IsNotEmpty({ message: '보호자의 ID를 입력해주세요.' })
    id: string
    name: string
    phone_number: string
}