import { Test, TestingModule } from '@nestjs/testing';
import { NinjaUsersService } from './ninja-users.service';

describe('NinjaUsersService', () => {
  let service: NinjaUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NinjaUsersService],
    }).compile();

    service = module.get<NinjaUsersService>(NinjaUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
