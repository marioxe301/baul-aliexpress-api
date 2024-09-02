import { Global, Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export const PRISMA_SERVICE_TOKEN = 'IPrismaService';

@Global()
@Module({
  providers: [
    {
      provide: PRISMA_SERVICE_TOKEN,
      useClass: PrismaClient,
    },
  ],
  exports: [
    {
      provide: PRISMA_SERVICE_TOKEN,
      useClass: PrismaClient,
    },
  ],
})
export class PrismaModule {}
