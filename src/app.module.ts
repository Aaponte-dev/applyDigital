// External dependencies
import * as joi from 'joi';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

// Internal dependencies
import config from './config/environmentVariables';
import { HackerNewsModule } from './modules/hackerNews/hackerNews.module';
import * as dbSetting from './config/databaseSetting';
import { CronModule } from './modules/cron/cron.module';

@Module({
    imports: [
        MongooseModule.forRoot(dbSetting.default.buildOptionsByMongoose()),
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
            validationSchema: joi.object({
                PROJECT_NAME: joi.string().required(),
                PORT: joi.number().required(),
            }),
        }),
        HackerNewsModule,
        CronModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
