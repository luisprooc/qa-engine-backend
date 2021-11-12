import { IsString, IsInt, IsBoolean, IsDate, IsEmail, MinLength, Length, IsOptional, IsEmpty, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {

  @ApiProperty({ nullable: false,  readOnly: true, description: 'It\'s generated automatically' })
  @IsEmpty()
  readonly id?: number;

  @ApiProperty({ nullable: false,  example: 'example@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ nullable: false, minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;

  @ApiProperty({ nullable: false, maxLength: 60, example: 'Jhon Doe LR' })
  @IsString()
  @Length(10,60)
  fullName: string;

  @ApiProperty({ nullable: true })
  @IsOptional()
  @IsInt()
  @Min(13)
  age?: number;

  @ApiProperty({ nullable: false, default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsEmpty()
  readonly createdDate?: Date;

  @ApiProperty({ nullable: false, description: 'It\'s generated automatically', readOnly: true })
  @IsEmpty()
  readonly updatedDate?: Date;
}
