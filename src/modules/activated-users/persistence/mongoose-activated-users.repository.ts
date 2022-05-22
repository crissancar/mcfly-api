import { Model } from 'mongoose';
import { MongooseRepository } from '../../shared/persistence/mongoose.repository';
import { ActivatedUsersRepository } from '../repositories/activated-users.repository';
import { ActivatedUsers } from './activated-users-mongoose.model';
import { InjectModel } from '@nestjs/mongoose';
import { ActivatedUser } from '../models/activated-user.model';

export class MongooseActivatedUsersRepository
  extends MongooseRepository<ActivatedUsers>
  implements ActivatedUsersRepository
{
  constructor(@InjectModel(ActivatedUsers.name) private _model: Model<ActivatedUsers>) {
    super();
  }

  async save(activatedUser: ActivatedUser): Promise<void> {
    const id: string = activatedUser.id.valueOf();

    await this.persist(id, activatedUser);
  }

  async delete(activatedUser: ActivatedUser): Promise<void> {
    const id: string = activatedUser.id.valueOf();

    await this.model().findByIdAndRemove(id);
  }

  async find(): Promise<any> {
    const activatedUsers: any = await this.model().find();

    return activatedUsers ? ActivatedUser.fromPlainDataArray(activatedUsers) : null;
  }

  protected model(): Model<ActivatedUsers> {
    return this._model;
  }
}
