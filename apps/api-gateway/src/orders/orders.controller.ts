import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(
    @Inject('ORDERS_SERVICE') private readonly ordersClient: ClientProxy,
  ) {}

  @Post()
  async createOrder(@Body() createOrderDto: CreateOrderDto) {
    return this.ordersClient.send({ cmd: 'create_order' }, createOrderDto);
  }

  @Get()
  async getAllOrders() {
    return this.ordersClient.send({ cmd: 'get_all_orders' }, {});
  }

  @Get(':id')
  async getOrderById(@Param('id') id: string) {
    return this.ordersClient.send({ cmd: 'get_order_by_id' }, { id });
  }
}