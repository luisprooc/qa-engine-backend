import { IsString, IsInt, IsBoolean, IsDate } from 'class-validator';
import {ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

  @ApiProperty({ nullable: false,  readOnly: true, description: 'It\'s generated automatically' })
  @IsInt()
  readonly id: number;

  @ApiProperty({ nullable: false,  example: 'example@gmail.com' })
  @IsString()
  email: string;

  @ApiProperty({ nullable: false, minLength: 8 })
  @IsString()
  password: string;

  @ApiProperty({ nullable: false, maxLength: 60, example: 'Jhon Doe' })
  @IsString()
  fullName: string;

  @ApiProperty({ nullable: true })
  @IsInt()
  age?: number;

  @ApiProperty({ nullable: false, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsDate()
  readonly createdDate: Date;

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsDate()
  readonly updatedDate: Date;
}
