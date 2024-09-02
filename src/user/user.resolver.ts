import { UserService } from './user.service';
import { User } from './models/user.model';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserArgs } from './models/dto/user.args';
import { NewUserInput } from './models/dto/new-user.input';
import { UpdateUserInput } from './models/dto/update-user.input';
import { DeleteUserInput } from './models/dto/delete-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  getAllUsers(@Args() args: UserArgs): Promise<User[]> {
    return this.userService.findAll(args);
  }

  @Query(() => User)
  getUser(@Args() args: UserArgs): Promise<User> {
    return this.userService.findOne(args);
  }

  @Mutation(() => User)
  createUser(@Args('data') data: NewUserInput): Promise<User> {
    return this.userService.create(data);
  }

  @Mutation(() => User)
  updateUser(@Args('data') data: UpdateUserInput): Promise<User> {
    return this.userService.update(data);
  }

  @Mutation(() => User)
  deleteUser(@Args('data') args: DeleteUserInput): Promise<User> {
    return this.userService.delete(args);
  }
}
