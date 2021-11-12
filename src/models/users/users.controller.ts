import { Controller, Get, Post, Body, Param, Delete, ValidationPipe, ParseIntPipe, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBadRequestResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
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
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.'})
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'Return a user with this id.'})
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({description: 'User not found.'})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'User has been removed.'})
  @ApiForbiddenResponse({ status: 403, description: 'Forbidden.'})
  @ApiNotFoundResponse({ description: 'User not found.'})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.remove(+id);
  }
}
