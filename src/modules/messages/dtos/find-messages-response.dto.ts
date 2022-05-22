import { Message } from '../models/message.model';

export class FindMessagesResponse {
  messages: Array<Message>;

  constructor(messages: Array<Message>) {
    this.messages = messages;
  }
}
