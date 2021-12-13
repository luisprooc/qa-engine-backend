import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../models/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { GetUserDto } from 'src/models/users/dto/get-user-dto';
import { ConfigService } from '@nestjs/config';
import configurationKeys from 'src/config/app/configuration.keys';
import { CreateAuthLoginDto } from './dto/create-auth-login.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService
  ) {}

  async login(createAuthLoginDto: CreateAuthLoginDto) {
    const user: GetUserDto = await this.usersService.findOneByEmail(createAuthLoginDto.email);

    if(user.password == createAuthLoginDto.password) {
      const payload = { username: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload, {
          privateKey: this.configService.get<string>(
            configurationKeys.JWT_SECRET_KEY
          )
        }),
      };
    }
    throw new ForbiddenException('Username or password incorrect');
  }

  async generateApiKey(request: any) {
    const payload = {
      host: request.headers.host,
      userAgent: request.headers['user-agent']
    };

    return {
      api_key: this.jwtService.sign(payload, {
        privateKey: this.configService.get<string>(
          configurationKeys.JWT_SECRET_KEY
        )
      })
    }
  }
}