// External dependencies
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as paginate from 'mongoose-paginate-v2';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Internal dependencies
import { HighlightResult } from './highlightResult.entity';

@Schema({ timestamps: true })
export class Hits extends Document {
    @Prop({ type: String })
    @ApiProperty()
    created_at: string;

    @Prop({ type: String })
    @ApiProperty()
    title: string;

    @Prop({ type: String })
    @ApiProperty()
    url: string;

    @Prop({ type: String })
    @ApiProperty()
    author: string;

    @Prop({ type: Number })
    @ApiProperty()
    points: number;

    @Prop({ type: String })
    @ApiProperty()
    story_text: string;

    @Prop({ type: String })
    @ApiProperty()
    comment_text: string;

    @Prop({ type: Number })
    @ApiProperty()
    num_comments: number;

    @Prop({ type: Number })
    @ApiProperty()
    story_id: number;

    @Prop({ type: String })
    @ApiProperty()
    story_title: string;

    @Prop({ type: String })
    @ApiProperty()
    story_url: string;

    @Prop({ type: Number })
    @ApiProperty()
    parent_id: number;

    @Prop({ type: Number })
    @ApiProperty()
    created_at_i: number;

    @Prop({ type: [String] })
    @ApiProperty()
    _tags: string[];

    @Prop({ type: String })
    @ApiProperty()
    objectID: string;

    @Prop({ type: HighlightResult })
    @ApiProperty()
    _highlightResult: HighlightResult;
}

export const HitsSchema = SchemaFactory.createForClass(Hits);
HitsSchema.plugin(paginate);
