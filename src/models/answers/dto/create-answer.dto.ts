import { IsString, IsInt, IsDate, IsArray, Length } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnswerDto {

  @ApiProperty({ nullable: false,  readOnly: true, description: 'It\'s generated automatically' })
  @IsInt()
  readonly id: number;

  @ApiProperty({ nullable: false, maxLength: 250, minLength: 15 })
  @Length(15,260)
  @IsString()
  description: string;

  @ApiProperty({ nullable: false })
  @IsInt()
  user: number;

  @ApiProperty({ nullable: false })
  @IsInt()
  question: number;

  @ApiProperty({ nullable: true })
  @IsArray()
  upvotes?: [];

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsDate()
  readonly createdDate: Date;

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsDate()
  readonly updatedDate: Date;
}
