import { IsString,IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthLoginDto {

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;

}
