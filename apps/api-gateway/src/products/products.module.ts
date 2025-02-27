import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { RmqModule } from '@app/common';

@Module({
  imports: [
    RmqModule.register({
      name: 'PRODUCTS_SERVICE',
    }),
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}