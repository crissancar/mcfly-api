import { Message } from '../models/message.model';

export interface MessageRepository {
  save(message: Message): Promise<void>;
}
