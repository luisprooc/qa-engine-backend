import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDate, IsInt, IsString } from 'class-validator';

export class GetUserDto {
  @ApiProperty({ readOnly: true })
  @IsInt()
  readonly id: number;

  @ApiProperty({ readOnly: true })
  @IsString()
  readonly email: string;

  @ApiProperty({ readOnly: true })
  @IsString()
  readonly fullName: string;

  @ApiProperty({ readOnly: true })
  @IsInt()
  readonly age?: number;

  @ApiProperty({ readOnly: true, default: true })
  @IsBoolean()
  readonly isActive: boolean;

  @ApiProperty({ readOnly: true })
  @IsDate()
  readonly createdDate: Date;

  @ApiProperty({ readOnly: true })
  @IsDate()
  readonly updatedDate: Date;
}
