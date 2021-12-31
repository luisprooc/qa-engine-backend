import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateQuestionDto  {
  @ApiProperty({ nullable: false, maxLength: 70, minLength: 10 })
  @Length(10,70)
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({ nullable: true, maxLength: 100 })
  @Length(0,100)
  @IsString()
  @IsOptional()
  description?: string;
}
