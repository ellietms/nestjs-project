import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './products/products.module';
import { ProductsContrller } from './products/products.controller';
import { ProductService } from './products/products.service';
import entities from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mySQL2323@@',
      database: 'products',
      entities: entities,
      synchronize: true,
    }),
    ProductModule,
  ],
  controllers: [ProductsContrller],
  providers: [ProductService],
})
export class AppModule {}
