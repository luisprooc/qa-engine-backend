import { Controller, Get, Post, Body, Patch, Param, Delete, Req, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthLoginDto } from './dto/create-auth-login.dto';
import { CreateAuthDto } from './dto/create-auth.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  generateApiKey(@Req() request: any): object {
    return this.authService.generateApiKey(request);
  }

  @Post()
  login(@Body() createAuthLoginDto: CreateAuthLoginDto) {
    return this.authService.login(createAuthLoginDto);
  }

}
