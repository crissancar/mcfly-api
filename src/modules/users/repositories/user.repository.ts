import { User } from '../models/user.model';
import { Nullable } from '../../shared/types/Nullable';

export interface UserRepository {
  save(user: User): Promise<void>;
  search(id: string): Promise<Nullable<User>>;
}
