import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { IS_PERMISSIONS_KEY } from '../decorators/metadata.decorator';
import { UserPayload } from 'src/auth/interfaces/user.payload';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const permissions = this.reflector.getAllAndOverride<string[]>(
      IS_PERMISSIONS_KEY,
      [context.getHandler(), context.getClass()],
    );

    if (!permissions) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context);
    const user: UserPayload = ctx.getContext().req.user;
    return permissions.some((permission) =>
      user.permissions.includes(permission),
    );
  }
}
