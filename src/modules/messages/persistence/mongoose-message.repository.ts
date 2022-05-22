import { MongooseRepository } from '../../shared/persistence/mongoose.repository';
import { Messages } from './mongoose-message.model';
import { MessageRepository } from '../repositories/message.repository';
import { Model } from 'mongoose';
import { Message } from '../models/message.model';
import { InjectModel } from '@nestjs/mongoose';

export class MongooseMessageRepository extends MongooseRepository<Messages> implements MessageRepository {
  constructor(@InjectModel(Messages.name) private _model: Model<Messages>) {
    super();
  }

  async save(message: Message): Promise<void> {
    const id = message.id;

    await this.persist(id, message);
  }

  protected model(): Model<Messages> {
    return this._model;
  }
}
