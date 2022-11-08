// External dependencies
import { Module } from '@nestjs/common';

// Internal dependencies
import { HackerNewsController } from './controller/hackerNewsController.controller';
import { HackerNewsService } from './service/hackerNewsService.service';

@Module({
    controllers: [HackerNewsController],
    providers: [HackerNewsService],
})
export class HackerNewsModule {}
