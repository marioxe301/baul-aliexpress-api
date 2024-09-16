import { Variation } from '@/variation/models/variation.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'VariationInventory model' })
export class VariationInventory {
  @Field(() => ID)
  id: string;

  @Field()
  variationId: string;

  @Field()
  stock: number;

  @Field()
  price: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  //Relations Fields

  @Field(() => Variation)
  variation: Variation;
}
