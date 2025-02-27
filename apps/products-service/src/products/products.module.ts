import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schemas/product.schema';
import { DatabaseModule, RmqModule } from '@app/common';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    RmqModule,
  ],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}