import { Mutation, Args } from '@nestjs/graphql';
import { Public } from '@shared/decorators/metadata.decorator';
import { Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { LoginInput } from './models/dto/login.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Mutation(() => Auth, { nullable: true })
  async login(@Args('data') data: LoginInput): Promise<Auth> {
    const auth = await this.authService.validateUser(data.email, data.password);

    if (auth) {
      const token = await this.authService.generateToken(auth);
      return token;
    }

    return null;
  }
}
