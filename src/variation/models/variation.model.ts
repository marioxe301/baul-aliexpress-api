import { Image } from '@/images/models/images.model';
import { OrderItems } from '@/order-items/models/order-items.model';
import { Product } from '@/product/models/product.model';
import { VariationInventory } from '@/variation-inventory/models/variation-inventory.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Variation model' })
export class Variation {
  @Field(() => ID)
  id: string;

  @Field()
  productId: string;

  @Field()
  attributes: string;

  @Field()
  value: string;

  //Relations Fields
  @Field(() => [Image])
  images: Image[];

  @Field(() => Product, { nullable: true })
  product?: Product;

  @Field(() => VariationInventory, { nullable: true })
  inventory?: VariationInventory;

  @Field(() => [OrderItems])
  order_items: OrderItems[];
}
