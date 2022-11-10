// External dependencies
import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Put,
    Query,
    UseGuards,
    // UseGuards,
} from '@nestjs/common';
import { ObjectId } from 'mongoose';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

// Internal dependencies
import { Hits } from '../../../entities/hits.entity';
import { UpdateHitById } from '../dtos/updateHitById.dto';
import { GetAllHitsDto } from '../../../dtos/GetAllHits.dto';
import { ResponseDto } from '../../../dtos/response.dto';
import { PaginatedDto } from '../../../dtos/pagination.dto';
import { HackerNewsService } from '../service/hackerNewsService.service';
import { ParseObjectIdPipe } from '../../../pipe/parseObjectIdPipe.pipe';
import { ApiKeyGuard } from '../../../guards/apiKey.guard';

@Controller(HackerNewsController.name)
@ApiTags(`${HackerNewsController.name}`)
export class HackerNewsController {
    private readonly logger: Logger = new Logger(HackerNewsController.name);
    constructor(private readonly hackerNewsService: HackerNewsService) {}

    @UseGuards(ApiKeyGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: 'Obtain paginated hits',
        type: [Hits],
    })
    @Get('hits')
    async getAllHits(@Query() query): Promise<PaginatedDto<Hits>> {
        const request: GetAllHitsDto = {
            page: query.page || 1,
            limit: query.limit || 5,
            title: query.title,
            _tags: query._tags,
            author: query.author,
        };
        this.logger.log(`GET_ALL_HITS::INIT`);
        const response = await this.hackerNewsService.getAllHits(request);
        this.logger.log(`GET_ALL_HITS::FINISH`);
        return response;
    }

    @UseGuards(ApiKeyGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: 'Get hit by id',
        type: Hits,
    })
    @Get('hit/:hitId')
    async getHitById(
        @Param(ParseObjectIdPipe) hitId: ObjectId,
    ): Promise<ResponseDto<Hits>> {
        this.logger.log(`GET_ALL_HITS::INIT`);
        const response = await this.hackerNewsService.getHitById(hitId);
        this.logger.log(`GET_ALL_HITS::FINISH`);
        return response;
    }

    @UseGuards(ApiKeyGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: 'Delete hit by id',
        type: Hits,
    })
    @Delete('hit/:hitId')
    async deleteHitById(
        @Param(ParseObjectIdPipe) hitId: ObjectId,
    ): Promise<any> {
        this.logger.log(`DELETE_ALL_HIT_BY_ID::INIT`);
        const response = await this.hackerNewsService.deleteOneHitById(hitId);
        this.logger.log(`DELETE_ALL_HIT_BY_ID::FINISH`);
        return response;
    }

    @UseGuards(ApiKeyGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: 'Delete all hits',
        type: Hits,
    })
    @Delete('hits')
    async deleteAllHits(): Promise<any> {
        this.logger.log(`DELETE_ALL_HITS::INIT`);
        const response = await this.hackerNewsService.deleteAllHits();
        this.logger.log(`DELETE_ALL_HITS::FINISH`);
        return response;
    }

    @UseGuards(ApiKeyGuard)
    @ApiBearerAuth()
    @ApiCreatedResponse({
        description: 'Update hit by id',
        type: Hits,
    })
    @Put('hit/:hitId')
    async updateHitById(
        @Param(ParseObjectIdPipe) hitId: ObjectId,
        @Body() hit: UpdateHitById,
    ): Promise<ResponseDto<Hits>> {
        hit.hitId = hitId;
        this.logger.log(`UPDATE_HIT_BY_ID::INIT`);
        const response = await this.hackerNewsService.updateHitById(hit);
        this.logger.log(`UPDATE_HIT_BY_ID::FINISH`);
        return response;
    }
}
