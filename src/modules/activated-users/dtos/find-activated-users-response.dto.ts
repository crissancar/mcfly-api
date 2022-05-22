import { ActivatedUsers } from '../persistence/activated-users-mongoose.model';

export class FindActivatedUsersResponse {
  readonly activatedUsers: Array<ActivatedUsers>;

  constructor(activatedUsers: Array<ActivatedUsers>) {
    this.activatedUsers = activatedUsers;
  }
}
