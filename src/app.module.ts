// External dependencies
import * as joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

// Internal dependencies
import config from './config/environmentVariables';
import { HackerNewsModule } from './modules/hackerNews/hackerNews.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
            validationSchema: joi.object({
                PROJECT_NAME: joi.string().required(),
                PORT: joi.number().required(),
            }),
        }),
        HackerNewsModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
