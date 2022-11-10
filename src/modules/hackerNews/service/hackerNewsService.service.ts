// External dependencies
import { InjectModel } from '@nestjs/mongoose';
import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { Model, PaginateModel, ObjectId } from 'mongoose';

// Internal dependencies
import { Hits } from '../../../entities/hits.entity';
import { GetAllHitsDto } from '../../../dtos/GetAllHits.dto';
import { ResponseDto } from '../../../dtos/response.dto';
import { PaginatedDto } from '../../../dtos/pagination.dto';
import { ResponseMessages } from '../../../enums/responseMessages';

@Injectable()
export class HackerNewsService {
    private readonly logger: Logger = new Logger(HackerNewsService.name);
    constructor(
        @InjectModel(Hits.name) private hits: Model<Hits>,
        @InjectModel(Hits.name) private hitsPagination: PaginateModel<Hits>,
    ) {}

    async getAllHits(request: GetAllHitsDto): Promise<PaginatedDto<Hits>> {
        this.logger.log(`GET_ALL_HITS::INIT`);
        let query = {};
        if (request.author) {
            query = Object.assign(query, { author: request.author });
        }
        if (request._tags) {
            query = Object.assign(query, { _tags: request._tags });
        }
        if (request.title) {
            query = Object.assign(query, { title: request.title });
        }
        const options = this.buildPaginationOptions(
            request.page,
            request.limit,
        );
        const response = await this.hitsPagination.paginate(query, options);
        this.logger.log(`GET_ALL_HITS::FINISH`);
        return response;
    }

    async getHitById(hitId: ObjectId): Promise<ResponseDto<Hits>> {
        this.logger.log(`GET_HIT_BY_ID::INIT`);
        const response = await this.hits.findOne({
            _id: hitId,
        });
        this.logger.log(`GET_HIT_BY_ID::FINISH`);
        return this.buildResponse(response);
    }

    async updateHitById(hit): Promise<ResponseDto<Hits>> {
        this.logger.log(`UPDATE_HIT_BY_ID::INIT`);
        const { hitId, ...hitInformation } = hit;
        const response = await this.hits.findOneAndUpdate(
            {
                _id: hitId,
            },
            { $set: hitInformation },
            { new: true },
        );
        this.logger.log(`UPDATE_HIT_BY_ID::FINISH`);
        return this.buildResponse(response);
    }

    async deleteAllHits(): Promise<any> {
        this.logger.log(`DELETE_ALL_HITS::INIT`);
        const response = await this.hits.deleteMany();
        this.logger.log(`DELETE_ALL_HITS::FINISH`);
        return response;
    }

    async deleteOneHitById(hitId: ObjectId): Promise<any> {
        this.logger.log(`GET_HIT_BY_ID::INIT`);
        const response = await this.hits.findOneAndDelete({
            _id: hitId,
        });
        this.logger.log(`GET_HIT_BY_ID::FINISH`);
        // return this.buildResponse(response);
        return response;
    }

    buildResponse(hits: Hits): ResponseDto<Hits> {
        this.logger.debug('BUILD_RESPONSE::INIT');
        const response: ResponseDto<Hits> = {
            data: hits,
            statusCode: hits ? HttpStatus.CREATED : HttpStatus.NO_CONTENT,
            message: ResponseMessages.SUCCESSFUL_REQUEST,
        };
        this.logger.debug('BUILD_RESPONSE::FINISH');
        return response;
    }

    buildPaginationOptions(page: number, limit: number) {
        this.logger.log(`BUILD_PAGINATION_OPTIONS::INIT`);
        const response = {
            page: page || 1,
            limit: limit || 5,
        };
        this.logger.log(`BUILD_PAGINATION_OPTIONS::FINISH`);
        return response;
    }
}
