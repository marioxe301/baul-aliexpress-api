import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'User model' })
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field(() => [String])
  permissions: string[];

  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;

  @Field()
  deleted: boolean;

  @Field()
  disabled: boolean;
}
