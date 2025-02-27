import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern({ cmd: 'create_order' })
  async createOrder(@Payload() createOrderDto: CreateOrderDto) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern({ cmd: 'get_all_orders' })
  async getAllOrders() {
    return this.ordersService.findAll();
  }

  @MessagePattern({ cmd: 'get_order_by_id' })
  async getOrderById(@Payload() payload: { id: string }) {
    return this.ordersService.findOne(payload.id);
  }
}