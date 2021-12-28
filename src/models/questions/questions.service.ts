import { Injectable } from '@nestjs/common';
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
  }

  async findAll() {
    return await this.questionRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} question`;
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
