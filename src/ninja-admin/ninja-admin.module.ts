import { Module } from '@nestjs/common';
import { NinjaAdminService } from './ninja-admin.service';
import { NinjaAdminController } from './ninja-admin.controller';

@Module({
  controllers: [NinjaAdminController],
  providers: [NinjaAdminService]
})
export class NinjaAdminModule {}
