import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type CatDocument = HydratedDocument<Cat>;
@Schema()
export class Cat {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  breed: string;
  @Prop()
  crossBetween: [string];
}
export const CatSchema = SchemaFactory.createForClass(Cat);
