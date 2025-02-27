import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('PRODUCTS_SERVICE') private readonly productsClient: ClientProxy,
  ) {}

  @Post()
  async createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsClient.send({ cmd: 'create_product' }, createProductDto);
  }

  @Get()
  async getAllProducts() {
    return this.productsClient.send({ cmd: 'get_all_products' }, {});
  }

  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productsClient.send({ cmd: 'get_product_by_id' }, { id });
  }
}