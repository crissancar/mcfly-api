import { FindMessagesRequest } from '../dtos/find-messages-request.dto';
import { Inject } from '@nestjs/common';
import { MessageRepository } from '../repositories/message.repository';
import { UserHasNoMessages } from '../exceptions/user-has-no-messages.exception';
import { FindMessagesResponse } from '../dtos/find-messages-response.dto';
import { Message } from '../models/message.model';

export class MessageFinder {
  constructor(@Inject('MessageRepository') private repository: MessageRepository) {}

  async run(request: FindMessagesRequest) {
    const id: string = request.id;
    const messages = await this.repository.find(id);

    if (this.isEmpty(messages)) {
      throw new UserHasNoMessages(id);
    }

    return new FindMessagesResponse(messages);
  }

  private isEmpty(messages: Array<Message>) {
    return messages.length === 0;
  }
}
