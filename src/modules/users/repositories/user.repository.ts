import { User } from '../models/user.model';
import { Nullable } from '../../shared/types/Nullable';

export interface UserRepository {
  save(user: User): Promise<void>;
  findById(id: string): Promise<Nullable<User>>;
  findByEmail(email: string): Promise<Nullable<User>>;
}
