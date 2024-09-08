import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AdminAPIKeyGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const ctx = GqlExecutionContext.create(context);
    const request: Request = ctx.getContext().req;

    const apiKey = request.headers['x-admin-api-key'];
    if (!apiKey || apiKey !== process.env.ADMIN_API_SECRET) {
      throw new UnauthorizedException('Invalid API key');
    }

    return true;
  }
}
