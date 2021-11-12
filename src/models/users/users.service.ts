import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { GetUserDto } from './dto/get-user-dto';

@Injectable()
export class UsersService {
  constructor(private _userRepository: UserRepository ){}

  async create(user: CreateUserDto) {

    const userExist = await this.findOneByEmail(user.email);
    if(userExist.length){
      throw new BadRequestException('User with this email already exist');
    } 

    await this._userRepository.save(user);

    return {
      message: 'User has been created'
    };
  }

  async findAll():Promise<GetUserDto[]>  {
    const users: GetUserDto[] = await this._userRepository.find();
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findOneByEmail(email: string) {
    const user = await this._userRepository.find({ where: { email } });
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
