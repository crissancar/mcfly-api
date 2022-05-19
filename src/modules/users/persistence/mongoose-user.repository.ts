import { MongooseRepository } from '../../shared/persistence/mongoose.repository';
import { UserRepository } from '../repositories/user.repository';
import { Users } from './mongoose-user.model';
import { Model } from 'mongoose';
import { User } from '../models/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Nullable } from '../../shared/types/Nullable';

export class MongooseUserRepository extends MongooseRepository<Users> implements UserRepository {
  constructor(@InjectModel(Users.name) private _model: Model<Users>) {
    super();
  }

  async save(user: User): Promise<void> {
    const id: string = user.id.valueOf();

    await this.persist(id, user);
  }

  async search(id: string): Promise<Nullable<User>> {
    const user: any = await this.model().findById(id);

    return user ? User.fromPlainData({ ...user._doc, id: id }) : null;
  }

  protected model(): Model<Users> {
    return this._model;
  }
}
