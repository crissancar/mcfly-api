export class Message {
  readonly id: string;
  readonly senderId: string;
  readonly receiverId: string;
  readonly content: string;

  constructor(id: string, senderId: string, receiverId: string, content: string) {
    this.id = id;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.content = content;
  }

  static create(id: string, senderId: string, receiverId: string, content: string) {
    return new Message(id, senderId, receiverId, content);
  }

  static fromPlainDataArray(plainDataArray): Array<Message> {
    const userMessages = plainDataArray.map((item) => {
      const id: string = item._id;
      const { senderId, receiverId, content } = item;

      return Message.create(id, senderId, receiverId, content);
    });

    return userMessages;
  }
}
