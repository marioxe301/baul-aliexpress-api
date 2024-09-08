import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './models/auth.model';
import { LoginInput } from './models/dto/login.input';
import { Public } from 'src/shared/decorators/metadata.decorator';

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
