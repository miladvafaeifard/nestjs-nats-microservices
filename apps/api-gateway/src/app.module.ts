import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/api-gateway/.env',
    }),
    UsersModule,
    ProductsModule,
    OrdersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}