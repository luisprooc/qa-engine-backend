import { GetUserDto } from '../../../models/users/dto/get-user-dto';
import { User } from '../../../models/users/entities/user.entity';

export class UserMapper {
  entityToDto( user: User ): GetUserDto {
    return new GetUserDto(
      user.id,
      user.email,
      user.fullName,
      user.age,
      user.createdDate,
      user.updatedDate
    )
  }
}
