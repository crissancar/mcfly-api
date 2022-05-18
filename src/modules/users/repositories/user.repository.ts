import { User } from '../models/user.model';

export interface UserRepository {
  save(user: User): Promise<void>;
}
