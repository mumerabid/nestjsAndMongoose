import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  username: String;
  @Prop({ required: true })
  password: String;
}
export const UserSchema = SchemaFactory.createForClass(User);
