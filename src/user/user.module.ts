import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { APP_GUARD } from '@nestjs/core';
import { AdminAPIKeyGuard } from '@shared/guards/admin-api-key.guard';

@Module({
  providers: [
    UserResolver,
    UserService,
    {
      provide: APP_GUARD,
      useClass: AdminAPIKeyGuard,
    },
  ],
})
export class UserModule {}
