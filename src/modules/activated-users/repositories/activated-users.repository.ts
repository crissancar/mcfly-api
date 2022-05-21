import { ActivatedUser } from '../models/activated-user.model';

export interface ActivatedUsersRepository {
  save(activatedUser: ActivatedUser): Promise<void>;
  delete(activatedUser: ActivatedUser): Promise<void>;
}
