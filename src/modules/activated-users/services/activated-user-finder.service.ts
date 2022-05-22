import { Inject } from '@nestjs/common';
import { ActivatedUsersRepository } from '../repositories/activated-users.repository';
import { FindActivatedUserRequest } from '../dtos/find-activated-user-request.dto';
import { UserIsNotActivated } from '../exceptions/user-is-not-activated.exception';

export class ActivatedUserFinder {
  constructor(@Inject('ActivatedUsersRepository') private repository: ActivatedUsersRepository) {}

  async run(request: FindActivatedUserRequest) {
    const id = request.id;
    const activatedUser = await this.repository.findById(id);

    if (!activatedUser) {
      throw new UserIsNotActivated();
    }
  }
}
