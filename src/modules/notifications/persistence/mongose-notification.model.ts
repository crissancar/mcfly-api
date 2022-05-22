import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Notifications {
  @Prop({ default: undefined })
  _id?: string;

  @Prop()
  id: string;

  @Prop()
  receiverId: string;

  @Prop()
  message: string;
}

export const NotificationsSchema = SchemaFactory.createForClass(Notifications);
