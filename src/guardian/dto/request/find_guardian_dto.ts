import { PickType } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'
import { GuardianEntity } from 'src/guardian/guardian.entity'

export class FindGuardianDto extends PickType(GuardianEntity , ['id'] as const) {
    @IsNotEmpty({ message: '보호자의 ID를 입력해주세요.' })
    id: string
}