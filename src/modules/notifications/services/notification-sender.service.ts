import { Inject } from '@nestjs/common';
import { NotificationRepository } from '../repositories/notification.repository';
import { Uuid } from '../../shared/services/uuid.service';
import { Notification } from '../models/notification.model';
import { OnEvent } from '@nestjs/event-emitter';
import { MessageSentEvent } from '../../messages/events/message-sent.event';

export class NotificationSender {
  constructor(@Inject('NotificationRepository') private repository: NotificationRepository) {}

  @OnEvent('message.sent')
  async run(request: MessageSentEvent) {
    const id = Uuid.random();
    const notification = Notification.create(id, request.receiverId, request.eventMessage);

    await this.repository.save(notification);
  }
}
