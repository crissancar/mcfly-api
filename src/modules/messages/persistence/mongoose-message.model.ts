import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Messages {
  @Prop({ default: undefined })
  _id?: string;

  @Prop()
  id: string;

  @Prop()
  senderId: string;

  @Prop()
  receiverId: string;

  @Prop({ required: true })
  content: string;
}

export const MessagesSchema = SchemaFactory.createForClass(Messages);
