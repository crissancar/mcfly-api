import { Inject } from '@nestjs/common';
import { FindNotificationsRequest } from '../dtos/find-notifications-request.dto';
import { NotificationRepository } from '../repositories/notification.repository';
import { FindNotificationsResponse } from '../dtos/find-notifications-response.dto';
import { UserHasNoNotifications } from '../exceptions/user-has-no-notifications.exception';
import { Notification } from '../models/notification.model';

export class NotificationFinder {
  constructor(@Inject('NotificationRepository') private repository: NotificationRepository) {}

  async run(request: FindNotificationsRequest) {
    const id: string = request.id;
    const notifications = await this.repository.find(id);

    if (this.isEmpty(notifications)) {
      throw new UserHasNoNotifications();
    }

    return new FindNotificationsResponse(notifications);
  }

  private isEmpty(notifications: Array<Notification>) {
    return notifications.length === 0;
  }
}
