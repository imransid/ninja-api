import { Test, TestingModule } from '@nestjs/testing';
import { NinjaAdminController } from './ninja-admin.controller';
import { NinjaAdminService } from './ninja-admin.service';

describe('NinjaAdminController', () => {
  let controller: NinjaAdminController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NinjaAdminController],
      providers: [NinjaAdminService],
    }).compile();

    controller = module.get<NinjaAdminController>(NinjaAdminController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
