export class Notification {
  id: string;
  receiverId: string;
  message: string;

  constructor(id: string, receiverId: string, message: string) {
    this.id = id;
    this.receiverId = receiverId;
    this.message = message;
  }

  static create(id: string, receiverId: string, message: string) {
    return new Notification(id, receiverId, message);
  }
}
