import { IsString, IsInt, IsArray, Length, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { User } from '../../../models/users/entities/user.entity';

export class CreateQuestionDto {

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
  user: User;

  @ApiProperty({ nullable: true, readOnly: true })
  @IsArray()
  @IsOptional()
  readonly answers?: [];
}
