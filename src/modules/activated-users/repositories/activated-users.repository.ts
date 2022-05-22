import { ActivatedUser } from '../models/activated-user.model';
import { Nullable } from '../../shared/types/Nullable';

export interface ActivatedUsersRepository {
  save(activatedUser: ActivatedUser): Promise<void>;
  delete(activatedUser: ActivatedUser): Promise<void>;
  find(): Promise<Nullable<Array<ActivatedUser>>>;
}
