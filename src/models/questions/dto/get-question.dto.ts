import { ApiProperty, PartialType } from '@nestjs/swagger';
import { User } from '../../../models/users/entities/user.entity';
import { CreateQuestionDto } from './create-question.dto';

export class GetQuestionDto extends PartialType(CreateQuestionDto) {

  @ApiProperty({ readOnly: true })
  readonly title: string;

  @ApiProperty({ readOnly: true })
  readonly description?: string;

  @ApiProperty({ readOnly: true })
  readonly user: User;
  
}
