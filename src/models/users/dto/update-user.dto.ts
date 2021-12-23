import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEmpty, IsInt, IsOptional, IsString, Length, Min } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty({ nullable: false,  example: 'example@gmail.com' })
  @IsEmail()
  @IsOptional()
  email: string;

  @ApiProperty({ description: 'Not update in this endpoint', nullable: true })
  @IsEmpty()
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
  @IsOptional()
  isActive: boolean;
}
