import { UserRepository } from '../repositories/user.repository';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindUserToLoginResponse } from '../dtos/find-user-to-login-response.dto';

@Injectable()
export class UserEmailFinder {
  constructor(@Inject('UserRepository') private repository: UserRepository) {}

  async run(email: string) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new BadRequestException();
    }

    return new FindUserToLoginResponse(user.id, user.email, user.password);
  }
}
