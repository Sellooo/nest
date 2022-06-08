import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsersDocument = Users & Document;

@Schema()
export class Users {
    @Prop()
    id: string;

    @Prop()
    password: number;

    @Prop({ default: null })
    nickname: string;

    @Prop({ default: null })
    phone: string;
}

export const UsersSchema = SchemaFactory.createForClass(Users);