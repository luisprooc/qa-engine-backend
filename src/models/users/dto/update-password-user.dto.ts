import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class UpdatePasswordUserDto {

  @ApiProperty({ nullable: false, minLength: 8 })
  @IsString()
  @MinLength(8)
  oldPassword: string;

  @ApiProperty({ nullable: false, minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;
  
}
