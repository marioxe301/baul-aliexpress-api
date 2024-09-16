import { Product } from '@/product/models/product.model';
import { Variation } from '@/variation/models/variation.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Image model' })
export class Image {
  @Field(() => ID)
  id: string;

  @Field()
  productId: string;

  @Field({ nullable: true })
  variationId?: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  order: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  //Relations Fields
  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => Variation, { nullable: true })
  variation?: Variation;
}
