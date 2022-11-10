import mongoose from 'mongoose';
// External dependencies
import { CanActivate } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';

// Internal dependencies
import { HackerNewsController } from './hackerNewsController.controller';
import { HackerNewsService } from './../service/hackerNewsService.service';
import { ApiKeyGuard } from '../../../guards/apiKey.guard';
import { UpdateHitById } from '../dtos/updateHitById.dto';

describe(`${HackerNewsController.name}`, () => {
    let controller: HackerNewsController;
    const mockHackerNewsService = {
        getAllHits: jest.fn().mockResolvedValue(null),
        getHitById: jest.fn().mockResolvedValue(null),
        updateHitById: jest.fn().mockResolvedValue(null),
        deleteAllHits: jest.fn().mockResolvedValue(null),
        deleteOneHitById: jest.fn().mockResolvedValue(null),
    };
    const mockApiKeyGuard: CanActivate = { canActivate: jest.fn(() => true) };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HackerNewsController],
            providers: [HackerNewsService],
        })
            .overrideProvider(HackerNewsService)
            .useValue(mockHackerNewsService)
            .overrideGuard(ApiKeyGuard)
            .useValue(mockApiKeyGuard)
            .compile();

        controller = module.get<HackerNewsController>(HackerNewsController);
    });

    it(`${HackerNewsController.name} must be defined`, () => {
        expect(controller).toBeDefined();
    });

    describe('Testing getAllHits method', () => {
        it('getAllHits must be defined', () => {
            expect(controller.getAllHits).toBeDefined();
        });

        it('should must call the getAllHits Method', async () => {
            await controller.getAllHits({});
            const getAllHits = jest
                .spyOn(mockHackerNewsService, 'getAllHits')
                .mockImplementation();
            expect(getAllHits).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing getHitById method', () => {
        it('getHitById must be defined', () => {
            expect(controller.getHitById).toBeDefined();
        });

        it('should must call the getHitById Method', async () => {
            const id = new mongoose.Schema.Types.ObjectId(
                '636c3a641e224dbd6b3feff8',
            );
            await controller.getHitById(id);
            const getHitById = jest
                .spyOn(mockHackerNewsService, 'getHitById')
                .mockImplementation();
            expect(getHitById).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing updateHitById method', () => {
        it('updateHitById must be defined', () => {
            expect(controller.updateHitById).toBeDefined();
        });

        it('should must call the updateHitById Method', async () => {
            const id = new mongoose.Schema.Types.ObjectId(
                '636c3a641e224dbd6b3feff9',
            );
            await controller.updateHitById(id, new UpdateHitById());
            const updateHitById = jest
                .spyOn(mockHackerNewsService, 'updateHitById')
                .mockImplementation();
            expect(updateHitById).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing deleteAllHits method', () => {
        it('deleteAllHits must be defined', () => {
            expect(controller.deleteAllHits).toBeDefined();
        });

        it('should must call the deleteAllHits Method', async () => {
            await controller.deleteAllHits();
            const deleteAllHits = jest
                .spyOn(mockHackerNewsService, 'deleteAllHits')
                .mockImplementation();
            expect(deleteAllHits).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing deleteHitById method', () => {
        it('deleteOneHitById must be defined', () => {
            expect(controller.deleteHitById).toBeDefined();
        });

        it('should must call the create Method', async () => {
            const id = new mongoose.Schema.Types.ObjectId(
                '636c3a641e224dbd6b3feff0',
            );
            await controller.deleteHitById(id);
            const deleteOneHitById = jest
                .spyOn(mockHackerNewsService, 'deleteOneHitById')
                .mockImplementation();
            expect(deleteOneHitById).toHaveBeenCalledTimes(1);
        });
    });
});
