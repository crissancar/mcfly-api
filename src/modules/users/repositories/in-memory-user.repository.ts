import { UserRepository } from './user.repository';
import { User } from '../models/user.model';
import { Nullable } from 'src/modules/shared/types/Nullable';

export class InMemoryUserRepository implements UserRepository {
  save(user: User): Promise<void> {
    return Promise.resolve();
  }

  findById(id: string): Promise<Nullable<User>> {
    return Promise.resolve(undefined);
  }

  findByEmail(email: string): Promise<Nullable<User>> {
    return Promise.resolve(undefined);
  }
}
