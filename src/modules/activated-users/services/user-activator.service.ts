import { ActivateUserRequest } from '../dtos/activate-user-request.dto';
import { ActivatedUser } from '../models/activated-user.model';
import { Inject } from '@nestjs/common';
import { ActivatedUsersRepository } from '../repositories/activated-users.repository';

export class UserActivator {
  constructor(@Inject('ActivatedUsersRepository') private repository: ActivatedUsersRepository) {}

  async run(request: ActivateUserRequest) {
    const activatedUser = ActivatedUser.create(request.id);

    await this.repository.save(activatedUser);
  }
}
