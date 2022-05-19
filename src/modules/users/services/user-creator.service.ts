import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from '../dtos/create-user-request.dto';
import { User } from '../models/user.model';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserCreator {
  constructor(@Inject('UserRepository') private repository: UserRepository) {}

  async run(request: CreateUserRequest): Promise<void> {
    const user = User.create(request.id, request.username, request.email, request.password);

    await this.repository.save(user);
  }
}
