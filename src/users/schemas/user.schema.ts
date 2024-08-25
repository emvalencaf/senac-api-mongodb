import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    birthdate: Date;

    @Prop({ required: true, unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true, default: () => new Date() })
    createdAt: Date;

    @Prop({ required: false })
    updatedAt: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
