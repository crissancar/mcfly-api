import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ActivatedUsers {
  @Prop({ default: undefined })
  _id?: string;

  @Prop()
  id: string;
}

export const ActivatedUsersSchema = SchemaFactory.createForClass(ActivatedUsers);
