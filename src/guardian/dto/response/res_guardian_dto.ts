import { OmitType } from "@nestjs/swagger";
import { GuardianEntity } from "src/guardian/entities/guardian.entity";

export class ResGuardianDto extends OmitType(GuardianEntity , [] as const){}