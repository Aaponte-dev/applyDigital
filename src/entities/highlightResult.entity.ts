// External dependencies
import { Document } from 'mongoose';
import * as paginate from 'mongoose-paginate-v2';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

// Internal dependencies
import { Url } from './url.entity';
import { Author } from './author.entity';
import { CommentText } from './commentText.entity';
import { Title } from './title.entity';
import { storyUrl } from './storyUrl.entity';
import { StoryTitle } from './storyTitle.entity';

@Schema({ timestamps: true })
export class HighlightResult extends Document {
    @Prop({ type: Author })
    author: Author;

    @Prop({ type: Title })
    title: Title;

    @Prop({ type: CommentText })
    commentText: CommentText;

    @Prop({ type: StoryTitle })
    story_title: StoryTitle;

    @Prop({ type: storyUrl })
    story_url: storyUrl;

    @Prop({ type: Url })
    url: Url;
}

export const HighlightResultSchema =
    SchemaFactory.createForClass(HighlightResult);
HighlightResultSchema.plugin(paginate);
