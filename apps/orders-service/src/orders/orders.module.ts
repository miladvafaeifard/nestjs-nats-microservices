import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { DatabaseModule, RmqModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    RmqModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}