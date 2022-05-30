import { User } from '../../../../src/modules/users/models/user.model';
import { FindUserToLoginResponse } from '../../../../src/modules/users/dtos/find-user-to-login-response.dto';

export class FindUserToLoginResponseMother {
  static create(user: User) {
    return new FindUserToLoginResponse(user.id, user.email, user.password);
  }
}
