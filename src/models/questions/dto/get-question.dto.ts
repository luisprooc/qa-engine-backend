import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateQuestionDto } from './create-question.dto';

export class GetQuestionDto extends PartialType(CreateQuestionDto) {

  @ApiProperty({ readOnly: true })
  readonly title: string;

  @ApiProperty({ readOnly: true })
  readonly description?: string;

  @ApiProperty({ readOnly: true })
  readonly user: number;
  
}
