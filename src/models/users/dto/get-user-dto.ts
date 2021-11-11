import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class GetUserDto extends PartialType(CreateUserDto) {

  @ApiProperty({ readOnly: true })
  readonly email: string;

  @ApiProperty({ readOnly: true })
  readonly fullName: string;

  @ApiProperty({ readOnly: true })
  readonly age?: number;

  @ApiProperty({ readOnly: true, default: true })
  readonly isActive: boolean;
  
}
