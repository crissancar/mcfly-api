import { MongooseRepository } from 'src/modules/shared/persistence/mongoose.repository';
import { Notifications } from './mongose-notification.model';
import { NotificationRepository } from '../repositories/notification.repository';
import { Model } from 'mongoose';
import { Notification } from '../models/notification.model';
import { InjectModel } from '@nestjs/mongoose';

export class MongooseNotificationRepository
  extends MongooseRepository<Notifications>
  implements NotificationRepository
{
  constructor(@InjectModel(Notifications.name) private _model: Model<Notifications>) {
    super();
  }

  async save(notification: Notification): Promise<void> {
    const id: string = notification.id;

    await this.persist(id, notification);
  }

  protected model(): Model<Notifications> {
    return this._model;
  }
}
