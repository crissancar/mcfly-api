import { FindUserResponse } from '../../../../src/modules/users/dtos/find-user-response.dto';
import { User } from '../../../../src/modules/users/models/user.model';

export class FindUserResponseMother {
  static create(user: User) {
    return new FindUserResponse(user.id, user.username, user.email);
  }
}
