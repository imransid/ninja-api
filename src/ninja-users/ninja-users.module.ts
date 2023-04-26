import { Module } from '@nestjs/common';
import { NinjaUsersController } from './ninja-users.controller';
import { NinjaUsersService } from './ninja-users.service';

@Module({
  controllers: [NinjaUsersController],
  providers: [NinjaUsersService]
})
export class NinjaUsersModule {}
