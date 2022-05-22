import { Nullable } from 'src/modules/shared/types/Nullable';
import { Notification } from '../models/notification.model';

export interface NotificationRepository {
  save(notification: Notification): Promise<void>;
  find(id: string): Promise<Nullable<Array<Notification>>>;
}
