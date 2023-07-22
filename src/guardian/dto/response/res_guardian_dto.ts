import { OmitType } from "@nestjs/swagger";
import { GuardianEntity } from "src/guardian/entities/guardian.entity";

export class ResGuardianTypeDto extends OmitType(GuardianEntity , [] as const){}