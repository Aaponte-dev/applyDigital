import { ObjectId } from 'mongoose';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateHitById {
    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly created_at: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly title: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly url: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly author: string;

    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    readonly points: number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly story_text: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly comment_text: string;

    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    readonly num_comments: number;

    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    readonly story_id: number;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly story_title: string;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly story_url: string;

    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    readonly parent_id: number;

    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional()
    readonly created_at_i: number;

    @IsArray()
    @IsOptional()
    @ApiPropertyOptional()
    readonly _tags: Array<string>;

    @IsString()
    @IsOptional()
    @ApiPropertyOptional()
    readonly objectID: string;

    hitId: ObjectId;
}
