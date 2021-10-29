import { IsString, IsInt, IsBoolean, IsDate } from 'class-validator';
export class CreateUserDto {
  @IsInt()
  id: number;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  fullName: string;

  @IsInt()
  age?: number;

  @IsBoolean()
  isActive: number;

  @IsDate()
  createdDate: Date;

  @IsDate()
  updatedDate: Date;
}
