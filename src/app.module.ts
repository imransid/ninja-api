import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NinjaUsersModule } from './ninja-users/ninja-users.module';
import { NinjaAdminModule } from './ninja-admin/ninja-admin.module';

@Module({
  imports: [NinjaUsersModule, NinjaAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
