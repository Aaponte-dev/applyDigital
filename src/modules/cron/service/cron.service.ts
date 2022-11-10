// External dependencies
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { Hits } from 'src/entities/hits.entity';

@Injectable()
export class CronService {
    private readonly logger = new Logger(CronService.name);
    constructor(
        private readonly httpService: HttpService,
        @InjectModel(Hits.name) private hits: Model<Hits>,
    ) {}

    @Cron(CronExpression.EVERY_HOUR)
    async handleCronEveryHour() {
        this.logger.debug('INIT', 'HANDLE_CRON_EVERY_HOUR');
        let condition1 = 1;
        const query = await this.httpService.axiosRef.get(
            'https://hn.algolia.com/api/v1/search_by_date?query=nodeJs',
        );
        const response = await this.hits.find();
        if (condition1 == 1 && !Object.keys(response).length && query.data) {
            Logger.log('INIT', 'CREATE_HITS');
            await this.hits.insertMany(query.data.hits);
            Logger.log('INIT', 'CREATE_HITS');
            condition1 = 0;
        }
        this.logger.debug('FINISH', 'HANDLE_CRON_EVERY_HOUR');
    }
}
