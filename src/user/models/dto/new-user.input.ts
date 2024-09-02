import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';

@InputType()
export class NewUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(1)
  name: string;

  @Field()
  @MinLength(64)
  password: string;

  @Field(() => [String])
  permissions: string[];
}
