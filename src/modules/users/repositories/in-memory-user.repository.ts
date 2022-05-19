import { UserRepository } from './user.repository';
import { User } from '../models/user.model';

export class InMemoryUserRepository implements UserRepository {
  save(user: User): Promise<void> {
    console.log(user);

    return Promise.resolve();
  }
}
