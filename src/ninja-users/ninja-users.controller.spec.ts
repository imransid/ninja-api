import { Test, TestingModule } from '@nestjs/testing';
import { NinjaUsersController } from './ninja-users.controller';

describe('NinjaUsersController', () => {
  let controller: NinjaUsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NinjaUsersController],
    }).compile();

    controller = module.get<NinjaUsersController>(NinjaUsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
