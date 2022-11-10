// External dependencies
import mongoose from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';

// Internal dependencies
import { HackerNewsService } from './hackerNewsService.service';

describe(`${HackerNewsService.name}`, () => {
    let service: HackerNewsService;
    const mockHackerNewsRepository = {
        paginate: jest.fn().mockResolvedValue(null),
        findOne: jest.fn().mockResolvedValue(null),
        findOneAndUpdate: jest.fn().mockResolvedValue(null),
        deleteMany: jest.fn().mockResolvedValue(null),
        findOneAndDelete: jest.fn().mockResolvedValue(null),
    };
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                {
                    provide: getModelToken('Hits'),
                    useValue: mockHackerNewsRepository,
                },
                HackerNewsService,
            ],
        }).compile();
        service = module.get<HackerNewsService>(HackerNewsService);
    });

    it(`${HackerNewsService.name} must be defined`, () => {
        expect(service).toBeDefined();
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    describe('Testing getAllHits method', () => {
        it('getAllHits must be defined', () => {
            expect(service.getAllHits).toBeDefined();
        });
    });

    describe('Testing getHitById method', () => {
        it('getHitById must be defined', () => {
            expect(service.getHitById).toBeDefined();
        });

        it('should must call the getHitById Method', async () => {
            const id = new mongoose.Schema.Types.ObjectId(
                '636c3a641e224dbd6b3feff8',
            );
            await service.getHitById(id);
            const getHitById = jest
                .spyOn(mockHackerNewsRepository, 'findOne')
                .mockImplementation();
            expect(getHitById).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing updateHitById method', () => {
        it('updateHitById must be defined', () => {
            expect(service.updateHitById).toBeDefined();
        });

        it('should must call the updateHitById Method', async () => {
            await service.updateHitById({});
            const updateHitById = jest
                .spyOn(mockHackerNewsRepository, 'findOneAndUpdate')
                .mockImplementation();
            expect(updateHitById).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing deleteAllHits method', () => {
        it('deleteAllHits must be defined', () => {
            expect(service.deleteAllHits).toBeDefined();
        });

        it('should must call the deleteAllHits Method', async () => {
            await service.deleteAllHits();
            const deleteAllHits = jest
                .spyOn(mockHackerNewsRepository, 'deleteMany')
                .mockImplementation();
            expect(deleteAllHits).toHaveBeenCalledTimes(1);
        });
    });

    describe('Testing deleteOneHitById method', () => {
        it('deleteOneHitById must be defined', () => {
            expect(service.deleteOneHitById).toBeDefined();
        });

        it('should must call the deleteOneHitById Method', async () => {
            const id = new mongoose.Schema.Types.ObjectId(
                '636c3a641e224dbd6b3feff9',
            );
            await service.deleteOneHitById(id);
            const deleteOneHitById = jest
                .spyOn(mockHackerNewsRepository, 'findOneAndDelete')
                .mockImplementation();
            expect(deleteOneHitById).toHaveBeenCalledTimes(1);
        });
    });
});
