import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'
import { IsUUID } from 'class-validator'
import { Exclude } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'

// 엔터티 생성시 상속 받아야되는 부모 엔터티 Class  
export abstract class CommonEntity {
  @IsUUID()
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    example: 'acd9c17d-56f5-42dc-8cbb-7808e080cab2',
    description: 'UUID',
    required: true
  })
  id: string

  // 해당 열이 추가된 시각을 자동으로 기록
  // 만일 Postgres의 time zone이 'UTC'라면 UTC 기준으로 출력하고 'Asia/Seoul'라면 서울 기준으로 출력한다.
  // DB SQL QUERY : set time zone 'Asia/Seoul'; set time zone 'UTC'; show timezone;
  @CreateDateColumn({
    type: 'timestamp' /* timestamp with time zone */,
  })
  @ApiProperty({
    example: '2023-07-13T06:28:32.525Z',
    description: '업데이트 일자',
    required: true
  })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  @ApiProperty({
    example: '2023-07-13T06:28:32.525Z',
    description: '생성 일자',
    required: true
  })
  updatedAt: Date

  // Soft Delete : 기존에는 null, 삭제시에 timestamp를 찍는다.
  @Exclude()
  @DeleteDateColumn({ type: 'timestamp' })
  deletedAt?: Date | null
}