import { Notification } from '../models/notification.model';

export interface NotificationRepository {
  save(notification: Notification): Promise<void>;
}
