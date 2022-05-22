import { Message } from '../models/message.model';
import { Nullable } from '../../shared/types/Nullable';

export interface MessageRepository {
  save(message: Message): Promise<void>;
  find(id: string): Promise<Nullable<Array<Message>>>;
}
