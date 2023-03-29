import { Test, TestingModule } from '@nestjs/testing';
import { DiscountCodesController } from './discount-codes.controller';
import { DiscountCodesService } from './discount-codes.service';

describe('DiscountCodesController', () => {
  let controller: DiscountCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscountCodesController],
      providers: [DiscountCodesService],
    }).compile();

    controller = module.get<DiscountCodesController>(DiscountCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
