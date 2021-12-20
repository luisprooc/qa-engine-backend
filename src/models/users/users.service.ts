import { BadRequestException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
import { GetUserDto } from './dto/get-user-dto';
import { UsersMapper } from 'src/common/utils/mappers/user.mapper';
import { encryptPassword, verifyPassword } from 'src/common/utils/encrypt/encrypt-password.helper';
import { UpdatePasswordUserDto } from './dto/update-password-user.dto';

@Injectable()
export class UsersService {
  constructor( 
    private _userRepository: UserRepository,
    private _userMapper: UsersMapper  
  ){}

  async create(user: CreateUserDto) {

    const userExist = await this._userRepository.findOne({ where: { email: user.email } });

    if (userExist) {
      throw new BadRequestException('User with this email already exist');
    } 
    user.password = await encryptPassword(user.password);
    await this._userRepository.save(user);

    return {
      message: 'User has been created',
      statusCode: HttpStatus.CREATED
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
    delete user.password;
    return user;
  }

  async findOneByEmail(email: string): Promise<GetUserDto> {
    const user = await this._userRepository.findOne({ where: { email } });

    if(!user) {
      throw new NotFoundException('User not found');
    }
    return user; 
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<GetUserDto> {
    try {
      await this._userRepository.update(id,updateUserDto);
      return await this._userRepository.findOne(id);
    }

    catch {
      throw new BadRequestException('User hasn\'t been updated');
    }
  }

  async updatePassword(id: number, updatePasswordUserDto: UpdatePasswordUserDto): Promise<GetUserDto> {
    try {

      const user = await this._userRepository.findOne(id);
      const verify = await verifyPassword(user?.password, updatePasswordUserDto.oldPassword);

      if (!verify) {
        throw Error;
      }

      await this._userRepository.update(id,{ 
        password: await encryptPassword(updatePasswordUserDto.password)
      });
      return await this.findOne(id);
    }

    catch {
      throw new BadRequestException('Password not updated');
    }
  }

  async remove(id: number): Promise<object> {
    await this.findOne(id);
    await this._userRepository.delete(id);
    return {
      message: 'User has been removed'
    }
  }
}
