import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from './question.repository';


@Module({
  controllers: [QuestionsController],
  imports: [TypeOrmModule.forFeature([QuestionRepository])],
  providers: [QuestionsService,]
})
export class QuestionsModule {}
