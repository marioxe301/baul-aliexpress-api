import { Field, InputType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';

@InputType({ description: 'Delete user input' })
export class DeleteUserInput {
  @Field()
  @IsEmail()
  email: string;
}
