// External dependencies
import { Module } from '@nestjs/common';

// Internal dependencies
import { HackerNewsController } from './controller/hackerNewsController.controller';
import { HackerNewsService } from './service/hackerNewsService.service';
import { Hits, HitsSchema } from 'src/entities/hits.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: Hits.name,
                schema: HitsSchema,
            },
        ]),
    ],
    controllers: [HackerNewsController],
    providers: [HackerNewsService],
})
export class HackerNewsModule {}
