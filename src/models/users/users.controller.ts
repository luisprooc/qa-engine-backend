import { 
  Controller, Get, 
  Post, Body, Param, 
  Delete, ValidationPipe, 
  ParseIntPipe, Put, 
  UseGuards, Patch 
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { 
  ApiBadRequestResponse, ApiForbiddenResponse, 
  ApiNotFoundResponse, ApiResponse, ApiTags 
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { UpdatePasswordUserDto } from './dto/update-password-user.dto';

@ApiTags('users')
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({ status: 200, description: 'User has been created'})
  @ApiBadRequestResponse({description: 'User with this email already exist'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiResponse({ status: 200, description: 'Return an array with all users.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a user with this id.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiNotFoundResponse({description: 'User not found.'})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  @ApiResponse({ status: 200, description: 'Return a updated user.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiBadRequestResponse({description: 'User hasn\'t been updated.'})
  @ApiNotFoundResponse({description: 'User not found.'})
  update(@Param('id', ParseIntPipe) id: number, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Patch('password/:id')
  @ApiResponse({ status: 200, description: 'Return a user with password updated.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiNotFoundResponse({description: 'User not found.'})
  @ApiBadRequestResponse({description: 'Password not updated.'})
  updatePassword(
    @Param('id', ParseIntPipe) id: number, 
    @Body(new ValidationPipe()) updatePasswordUserDto: UpdatePasswordUserDto
  ) {
    return this.usersService.updatePassword(id, updatePasswordUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'User has been removed.'})
  @ApiForbiddenResponse({ description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'User not found.'})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
