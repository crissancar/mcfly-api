import { UserRepository } from '../repositories/user.repository';
import { FindUserResponse } from '../dtos/find-user-response.dto';
import { Inject, Injectable } from '@nestjs/common';
import { UserWithIdNotExists } from '../exceptions/user-with-id-not-exists.exception';

@Injectable()
export class UserFinder {
  constructor(@Inject('UserRepository') private repository: UserRepository) {}

  async run(id: string) {
    const user = await this.repository.findById(id);

    if (!user) {
      throw new UserWithIdNotExists(id);
    }

    return new FindUserResponse(user.id, user.username, user.email);
  }
}
