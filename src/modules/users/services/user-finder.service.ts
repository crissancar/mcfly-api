import { UserRepository } from '../repositories/user.repository';
import { FindUserResponse } from '../dtos/find-user-response.dto';
import { UserNotExists } from '../exceptions/user-not-exists.exception';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class UserFinder {
  constructor(@Inject('UserRepository') private repository: UserRepository) {}

  async run(id: string) {
    const user = await this.repository.search(id);

    if (!user) {
      throw new UserNotExists(id);
    }

    return new FindUserResponse(user.id, user.username, user.email);
  }
}
