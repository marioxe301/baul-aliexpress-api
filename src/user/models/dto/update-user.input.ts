import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, MinLength } from 'class-validator';

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field({ nullable: true })
  @MinLength(1)
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @MinLength(64)
  @IsOptional()
  password?: string;

  @Field(() => [String], { nullable: true })
  @IsOptional()
  permissions?: string[];
}
