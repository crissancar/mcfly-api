import { SendMessageRequest } from '../dtos/send-message-request.dto';
import { Inject, Injectable } from '@nestjs/common';
import { Message } from '../models/message.model';
import { MessageRepository } from '../repositories/message.repository';
import { Uuid } from '../../shared/services/uuid.service';

@Injectable()
export class MessageSender {
  constructor(@Inject('MessageRepository') private repository: MessageRepository) {}

  async run(request: SendMessageRequest) {
    const id = Uuid.random();
    const message = Message.create(id, request.senderId, request.receiverId, request.content);

    await this.repository.save(message);
  }
}
