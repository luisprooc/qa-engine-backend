import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateAnswerDto } from './create-answer.dto';

export class UpdateAnswerDto extends PartialType(CreateAnswerDto) {

  @ApiProperty({ readOnly: true })
  readonly description: string;

  @ApiProperty({ readOnly: true })
  readonly user: number;

  @ApiProperty({ readOnly: true })
  readonly question: number;

  @ApiProperty({ readOnly: true })
  readonly upvotes?: [];
}
