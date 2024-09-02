import { ArgsType, Field, ID } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

@ArgsType()
export class UserArgs {
  @Field(() => ID, { nullable: true })
  @IsString()
  @IsOptional()
  id?: string;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  deleted = false;

  @Field(() => Boolean, { nullable: true })
  @IsBoolean()
  @IsOptional()
  disabled = false;
}
