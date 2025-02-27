import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/products-service/.env',
    }),
    ProductsModule,
  ],
})
export class AppModule {}