import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionRepository } from './question.repository';

@Injectable()
export class QuestionsService {
  constructor(
    private questionRepository: QuestionRepository
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const question = await this.questionRepository.save(createQuestionDto);
    return question;
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  async findOne(id: number) {
    const question = await this.questionRepository.findOne(id);

    if(!question) {
      throw new NotFoundException('Question Not Found');
    }
    return question;
  }

  async update(id: number, updateQuestionDto: UpdateQuestionDto) {
    await this.questionRepository.update(id, updateQuestionDto);
    return await this.findOne(id);
  }

  async remove(id: number) {
    await this.questionRepository.findOne(id);
    await this.questionRepository.delete(id);
    return 'Question has been delete';
  }
}
