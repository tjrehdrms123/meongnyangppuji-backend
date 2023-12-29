import { SortType } from "src/common/define/EnumDefine"
import { IsInt, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class GetListAniamlDto {
  @IsInt({ message: '숫자로 입력해주세요.' })
  @IsNotEmpty({ message: '옵션을 입력해주세요' })
  option: number

  @IsString({ message: '문자로 입력해주세요.' })
  @IsNotEmpty({ message: '반려 동물 종류를 입력해주세요.' })
  @ApiProperty({
    example: '고양이',
    description: '반려 동물 종류',
    required: true
  })
  type_name: string

  @ApiProperty({
    example: '고양이',
    description: '반려 동물 종류',
    required: true
  })
  sort_type: SortType
}