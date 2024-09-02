import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Product model' })
export class Product {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  category: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  price?: number;

  @Field({ nullable: true })
  stock?: number;

  @Field()
  hasVariations: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  @Field()
  available: boolean;

  @Field(() => [String])
  tags: string[];
}
