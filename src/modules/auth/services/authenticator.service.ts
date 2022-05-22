import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '../../users/models/user.model';
import { LoginUserRequest } from '../../users/dtos/login-user-request.dto';
import { PayloadCreator } from './payload-creator.service';
import { UserEmailFinder } from '../../users/services/user-email-finder.service';

@Injectable()
export class Authenticator {
  private userFinder: UserEmailFinder;
  private payloadCreator: PayloadCreator;

  constructor(userFinder: UserEmailFinder, payloadCreator: PayloadCreator) {
    this.userFinder = userFinder;
    this.payloadCreator = payloadCreator;
  }

  async run(request: LoginUserRequest) {
    const { email, password } = request;

    const user = await this.userFinder.run({ email });

    if (this.userAuthenticationFailed(password, user.password)) {
      throw new UnauthorizedException();
    }

    return user;
  }

  private userAuthenticationFailed(password: string, hashedPassword: string) {
    return !User.comparePasswords(password, hashedPassword);
  }
}
