import { UserRepository } from '../repositories/user.repository';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { FindUserToLoginResponse } from '../dtos/find-user-to-login-response.dto';
import { FindUserEmailRequest } from '../dtos/find-user-email-request.dto';

@Injectable()
export class UserEmailFinder {
  constructor(@Inject('UserRepository') private repository: UserRepository) {}

  async run(request: FindUserEmailRequest) {
    const email: string = request.email;
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new BadRequestException();
    }

    return new FindUserToLoginResponse(user.id, user.email, user.password);
  }
}
