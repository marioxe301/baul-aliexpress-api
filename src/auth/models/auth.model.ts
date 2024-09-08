import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Auth model' })
export class Auth {
  @Field()
  access_token: string;
}
