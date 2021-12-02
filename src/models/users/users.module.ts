import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UsersMapper } from 'src/common/utils/mappers/user.mapper';

@Module({
  imports: [TypeOrmModule.forFeature([ UserRepository ])],
  controllers: [UsersController],
  providers: [UsersService, UsersMapper],
  exports: [UsersService]
})
export class UsersModule {}
