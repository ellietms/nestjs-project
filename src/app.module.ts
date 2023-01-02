import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { ProductsContrller } from "./products/products.controller";
import { ProductService } from "./products/products.service";

@Module({
  imports: [TypeOrmModule.forRoot(),ProductModule],
  controllers: [AppController, ProductsContrller],
  providers: [AppService, ProductService],
})
export class AppModule {}
