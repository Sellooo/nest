import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type GradeDocument = Grade & Document;

@Schema()
export class Grade {
  @Prop({ required: true })
  textGrade: string;

  @Prop({ default: 0 })
  maxLike: number;

  @Prop({ default: 0 })
  minLike: number;
}

export const GradeSchema = SchemaFactory.createForClass(Grade);
