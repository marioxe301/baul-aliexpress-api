import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class UserArgs {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field({ nullable: true })
  @IsEmail()
  @IsOptional()
  email?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  deleted? = false;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  disabled? = false;

  @Field(() => Boolean, {
    nullable: true,
    description: 'Return minified request',
  })
  @IsBoolean()
  @IsOptional()
  minified? = false;
}
