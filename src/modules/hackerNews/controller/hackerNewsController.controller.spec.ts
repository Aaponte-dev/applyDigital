// External dependencies
import { Test, TestingModule } from '@nestjs/testing';

// Internal dependencies
import { HackerNewsController } from './hackerNewsController.controller';

describe(`${HackerNewsController.name}`, () => {
    let controller: HackerNewsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [HackerNewsController],
        }).compile();

        controller = module.get<HackerNewsController>(HackerNewsController);
    });

    it(`${HackerNewsController.name} must be defined`, () => {
        expect(controller).toBeDefined();
    });
});
