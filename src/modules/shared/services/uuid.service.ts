import { v4 } from 'uuid';

export class Uuid {
  static random(): string {
    return v4();
  }
}
