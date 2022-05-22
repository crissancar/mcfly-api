import { Inject } from '@nestjs/common';
import { ActivatedUsersRepository } from '../repositories/activated-users.repository';
import { NoActivatedUsers } from '../exceptions/no-activated-users.exception';
import { FindActivatedUsersResponse } from '../dtos/find-activated-users-response.dto';

export class ActivatedUsersFinder {
  constructor(@Inject('ActivatedUsersRepository') private repository: ActivatedUsersRepository) {}

  async run() {
    const activatedUsers = await this.repository.find();

    if (!activatedUsers) {
      throw new NoActivatedUsers();
    }

    return new FindActivatedUsersResponse(activatedUsers);
  }
}
