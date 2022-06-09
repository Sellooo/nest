import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TextDocument = Text & Document;

@Schema({ timestamps: true })
export class Text {
  @Prop({ required: true })
  title: string;

  @Prop({ default: null })
  content: string;

  @Prop({ default: 0 })
  like: number;

  @Prop({ default: 0 })
  bad: number;
}

export const TextSchema = SchemaFactory.createForClass(Text);
