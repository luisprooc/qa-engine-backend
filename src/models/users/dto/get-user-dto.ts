import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class GetUserDto {

  @ApiProperty({ readOnly: true })
  readonly id: number;

  @ApiProperty({ readOnly: true })
  readonly email: string;

  @ApiProperty({ readOnly: true })
  readonly fullName: string;

  @ApiProperty({ readOnly: true })
  readonly age?: number;

  @ApiProperty({ readOnly: true, default: true })
  readonly isActive: boolean;

  @ApiProperty({ readOnly: true })
  readonly createdDate: Date;

  @ApiProperty({ readOnly: true})
  readonly updatedDate: Date;

  constructor(
    id: number,
    email: string,
    fullName: string,
    age: number,
    createdDate: Date,
    updatedDate: Date
  ){
    this.id = id
    this.email = email;
    this.fullName =  fullName;
    this.age = age;
    this.createdDate = createdDate;
    this.updatedDate = updatedDate;

  }
  
}
