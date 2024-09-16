import { Order } from '@/order/models/order.model';
import { Product } from '@/product/models/product.model';
import { Variation } from '@/variation/models/variation.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'OrderItems model' })
export class OrderItems {
  @Field(() => ID)
  id: string;

  @Field()
  orderId: string;

  @Field()
  productId: string;

  @Field({ nullable: true })
  variationId?: string;

  @Field()
  quantity: number;

  @Field()
  price: number;

  @Field()
  total: number;

  @Field({ nullable: true })
  deleted: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  //Relations Fields
  @Field(() => Order)
  order: Order;

  @Field(() => Product)
  product: Product;

  @Field(() => Variation, { nullable: true })
  variation?: Variation;
}
