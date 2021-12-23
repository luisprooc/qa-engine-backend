import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserDto } from '../models/users/dto/get-user-dto';
import { CreateAuthLoginDto } from './dto/create-auth-login.dto';
import { verifyPassword } from '../common/utils/encrypt/encrypt-password.helper';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async login(createAuthLoginDto: CreateAuthLoginDto) {
    const user: GetUserDto = await this.usersService.findOneByEmail(createAuthLoginDto.email);
    const verify = await verifyPassword(user.password, createAuthLoginDto.password);

    if(verify) {
      const payload = { username: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    throw new ForbiddenException('Email or password incorrect');
  }

  async generateApiKey(request: any) {
    const payload = {
      host: request.headers.host,
      userAgent: request.headers['user-agent']
    };

    return {
      api_key: this.jwtService.sign(payload)
    }
  }
}