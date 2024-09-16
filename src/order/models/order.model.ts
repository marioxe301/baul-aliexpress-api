import { OrderItems } from '@/order-items/models/order-items.model';
import { Field, ID, ObjectType } from '@nestjs/graphql';
import { OrderStatus } from '@prisma/client';

@ObjectType({ description: 'Order model' })
export class Order {
  @Field(() => ID)
  id: string;

  @Field()
  orderNumber: string;

  @Field({ nullable: true })
  customerId?: string;

  @Field({ nullable: true })
  customerName?: string;

  @Field({ nullable: true })
  customerPhone?: string;

  @Field(() => OrderStatus)
  status: OrderStatus;

  @Field()
  totalAmount: number;

  @Field()
  amountPaid: number;

  @Field({ nullable: true })
  deleted?: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;

  //Relations Fields

  @Field(() => [OrderItems])
  items: OrderItems[];
}
