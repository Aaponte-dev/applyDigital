// External dependencies
import { Test, TestingModule } from '@nestjs/testing';
import { HackerNewsService } from './hackerNewsService.service';

// Internal dependencies

describe(`${HackerNewsService.name}`, () => {
    let service: HackerNewsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [HackerNewsService],
        }).compile();
        service = module.get<HackerNewsService>(HackerNewsService);
    });

    it(`${HackerNewsService.name} must be defined`, () => {
        expect(service).toBeDefined();
    });
});
