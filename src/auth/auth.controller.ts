import { Controller, Get, Post, Body, Req, ValidationPipe } from '@nestjs/common';
import { ApiForbiddenResponse, ApiResponse, ApiTags, ApiNotFoundResponse, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthLoginDto } from './dto/create-auth-login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiOperation({ description: 'Get a api_key' })
  @ApiResponse({ status: 200, description: 'User has been created'})
  generateApiKey(@Req() request: any): object {
    return this.authService.generateApiKey(request);
  }

  @Post()
  @ApiOperation({ description: 'Login a user for get his access_token' })
  @ApiResponse({ status: 200, description: 'User has been created' })
  @ApiNotFoundResponse({ description: 'User not found' })
  @ApiForbiddenResponse({ description: 'Email or password incorrect'})
  login(@Body(new ValidationPipe()) createAuthLoginDto: CreateAuthLoginDto): object {
    return this.authService.login(createAuthLoginDto);
  }

}
