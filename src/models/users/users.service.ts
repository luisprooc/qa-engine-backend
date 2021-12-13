import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { GetUserDto } from './dto/get-user-dto';
import { UsersMapper } from 'src/common/utils/mappers/user.mapper';

@Injectable()
export class UsersService {
  constructor( 
    private _userRepository: UserRepository,
    private _userMapper: UsersMapper  
  ){}

  async create(user: CreateUserDto) {

    const userExist = await this.findOneByEmail(user.email);
    if(userExist){
      throw new BadRequestException('User with this email already exist');
    } 

    await this._userRepository.save(user);

    return {
      message: 'User has been created'
    };
  }

  async findAll():Promise<GetUserDto[]>  {
    const users = await this._userRepository.find();

    if(!users) return [];
    
    return users.map(user => this._userMapper.entityToDto(user));
  }

  async findOne(id: number): Promise<GetUserDto> {
    const user = await this._userRepository.findOne(id);

    if(!user) {
      throw new NotFoundException('User not found');
    }
    return this._userMapper.entityToDto(user);
  }

  async findOneByEmail(email: string): Promise<GetUserDto> | null {
    const user = await this._userRepository.findOne({ where: { email } });

    if(!user) {
      throw new NotFoundException('User not found');
    }
    return user; 
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number): Promise<any> {
    await this.findOne(id);
    await this._userRepository.delete(id);
    return {
      message: 'User has been removed'
    }
  }
}
