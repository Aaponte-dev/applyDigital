// External dependencies
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';
import { Hits, HitsSchema } from 'src/entities/hits.entity';

// Internal dependencies
import { CronService } from './service/cron.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Hits.name,
                schema: HitsSchema,
            },
        ]),
        ScheduleModule.forRoot(),
        HttpModule.register({
            timeout: 5000,
            maxRedirects: 2,
        }),
    ],
    providers: [CronService],
})
export class CronModule {}
