import { Inject } from '@nestjs/common';
import { ActivatedUsersRepository } from '../repositories/activated-users.repository';
import { ActivatedUser } from '../models/activated-user.model';
import { DeactivateUserRequest } from '../dtos/deactivate-user-request.dto';

export class UserDeactivator {
  constructor(@Inject('ActivatedUsersRepository') private repository: ActivatedUsersRepository) {}

  async run(request: DeactivateUserRequest) {
    const activatedUser = ActivatedUser.create(request.id);

    await this.repository.delete(activatedUser);
  }
}
