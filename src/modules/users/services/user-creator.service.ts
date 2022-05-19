import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from '../dtos/create-user-request.dto';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';
import { UserAlreadyExists } from '../exceptions/user-already-exists.exception';

@Injectable()
export class UserCreator {
  constructor(@Inject('UserRepository') private repository: UserRepository) {}

  async run(request: CreateUserRequest): Promise<void> {
    const user = User.create(request.id, request.username, request.email, request.password);

    try {
      await this.repository.save(user);
    } catch (error) {
      if (this.checkMongooseUniqueEmailError(error)) {
        throw new UserAlreadyExists(user.email);
      }
    }
  }

  private checkMongooseUniqueEmailError(error): boolean {
    return error.name === 'MongoServerError' && error.code === 11000;
  }
}
