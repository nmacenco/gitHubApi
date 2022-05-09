import { Test, TestingModule } from '@nestjs/testing';
import { GetApiInfoController } from './get-api-info.controller';

describe('GetApiInfoController', () => {
  let controller: GetApiInfoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GetApiInfoController],
    }).compile();

    controller = module.get<GetApiInfoController>(GetApiInfoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
