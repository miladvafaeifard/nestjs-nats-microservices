import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    RmqModule.register({
      name: 'ORDERS_SERVICE',
    }),
  ],
  controllers: [OrdersController],
})
export class OrdersModule {}