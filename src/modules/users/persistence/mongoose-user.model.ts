import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Users {
  @Prop({ default: undefined })
  _id?: string;

  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop({ unique: true })
  email: string;

  @Prop()
  password?: string;
}

export const UserSchema = SchemaFactory.createForClass(Users);
