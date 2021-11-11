import { IsString, IsInt, IsDate, IsArray, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {

  @ApiProperty({ nullable: false,  readOnly: true, description: 'It\'s generated automatically' })
  @IsInt()
  readonly id: number;

  @ApiProperty({ nullable: false, maxLength: 70, minLength: 10 })
  @Length(10,70)
  @IsString()
  title: string;

  @ApiProperty({ nullable: true, maxLength: 100 })
  @Length(0,100)
  @IsString()
  description?: string;

  @ApiProperty({ nullable: false, description: 'Must be a user Id' })
  @IsInt()
  user: number;

  @ApiProperty({ nullable: true, readOnly: true })
  @IsArray()
  readonly answers?: [];

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsDate()
  readonly createdDate: Date;

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsDate()
  readonly updatedDate: Date;
}
