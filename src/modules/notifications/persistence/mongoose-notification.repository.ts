import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from '../../shared/persistence/mongoose.repository';
import { NotificationRepository } from '../repositories/notification.repository';
import { Notifications } from './mongose-notification.model';
import { Notification } from '../models/notification.model';
import { Nullable } from '../../shared/types/Nullable';

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

  async find(id: string): Promise<Nullable<Array<Notification>>> {
    const notifications: any = await this.model().find({ receiverId: id });

    return notifications ? Notification.fromPlainDataArray(notifications) : null;
  }

  protected model(): Model<Notifications> {
    return this._model;
  }
}
