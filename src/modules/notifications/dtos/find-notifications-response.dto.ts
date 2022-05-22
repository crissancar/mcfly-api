import { Notification } from '../models/notification.model';

export class FindNotificationsResponse {
  notifications: Array<Notification>;

  constructor(notifications: Array<Notification>) {
    this.notifications = notifications;
  }
}
