import { SortType } from "src/common/define/EnumDefine"
import { IsString, IsIn, IsNotEmpty } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";

export class GetListAniamlDto {
  @IsString({ message: '문자로 입력해주세요.' })
  @IsNotEmpty({ message: '정렬할 컬럼을 입력해주세요.' })
  @ApiProperty({
    example: 'scoreAvg',
    description: '정렬할 컬럼',
    required: true
  })
  order: string

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