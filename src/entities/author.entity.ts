// External dependencies
import { Document } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Author extends Document {
    @Prop({ type: String })
    value: string;

    @Prop({ type: String })
    matchLevel: string;

    @Prop({ type: [String] })
    matchedWords: string[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
AuthorSchema.plugin(paginate);
