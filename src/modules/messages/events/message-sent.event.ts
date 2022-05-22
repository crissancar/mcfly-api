export class MessageSentEvent {
  receiverId: string;
  eventMessage: string;

  constructor(receiverId: string, eventMessage: string) {
    this.receiverId = receiverId;
    this.eventMessage = eventMessage;
  }
}
