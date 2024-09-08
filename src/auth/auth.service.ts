import { Injectable, Inject } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PRISMA_SERVICE_TOKEN } from '@prisma-orm/module/prisma.module';
import { IPrismaService } from '@prisma-orm/prisma.interface';
import { UserPayload } from './interfaces/user.payload';

@Injectable()
export class AuthService {
  constructor(
    @Inject(PRISMA_SERVICE_TOKEN)
    private readonly prismaService: IPrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<UserPayload | null> {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (user && user.password === password) {
      const userData: UserPayload = {
        email: user.email,
        name: user.name,
        permissions: user.permissions,
      };

      return userData;
    }

    return null;
  }

  async generateToken(user: UserPayload): Promise<{ access_token: string }> {
    if (user) {
      const payload: UserPayload = user;

      return {
        access_token: this.jwtService.sign(payload),
      };
    }
    return null;
  }
}
