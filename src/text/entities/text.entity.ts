import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TextDocument = Text & Document;

@Schema()
export class Text {
  @Prop({ required: true })
  title: string;

  @Prop()
  content: string;

  @Prop()
  good: number;

  @Prop()
  bad: number;
}

export const TextSchema = SchemaFactory.createForClass(Text);
