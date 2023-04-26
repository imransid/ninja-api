import { Test, TestingModule } from '@nestjs/testing';
import { NinjaAdminService } from './ninja-admin.service';

describe('NinjaAdminService', () => {
  let service: NinjaAdminService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NinjaAdminService],
    }).compile();

    service = module.get<NinjaAdminService>(NinjaAdminService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
