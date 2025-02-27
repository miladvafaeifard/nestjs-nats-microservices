import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern({ cmd: 'create_product' })
  async createProduct(@Payload() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @MessagePattern({ cmd: 'get_all_products' })
  async getAllProducts() {
    return this.productsService.findAll();
  }

  @MessagePattern({ cmd: 'get_product_by_id' })
  async getProductById(@Payload() payload: { id: string }) {
    return this.productsService.findOne(payload.id);
  }
}