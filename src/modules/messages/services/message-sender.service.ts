import { SendMessageRequest } from '../dtos/send-message-request.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Message } from '../models/message.model';
import { MessageRepository } from '../repositories/message.repository';
import { Uuid } from '../../shared/services/uuid.service';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { MessageSentEvent } from '../events/message-sent.event';
import { MessageSentNotification } from '../enums/message-sent-notification.enum';

@Injectable()
export class MessageSender {
  private repository: MessageRepository;
  private event: EventEmitter2;

  constructor(@Inject('MessageRepository') repository: MessageRepository, event: EventEmitter2) {
    this.repository = repository;
    this.event = event;
  }

  async run(request: SendMessageRequest) {
    const id = Uuid.random();
    const message = Message.create(id, request.senderId, request.receiverId, request.content);

    await this.repository.save(message);

    this.emitEvent(request);
  }

  private emitEvent(request: SendMessageRequest) {
    this.event.emit('message.sent', new MessageSentEvent(request.receiverId, MessageSentNotification.Message));
  }
}
