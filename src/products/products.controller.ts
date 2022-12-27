import { Controller, Post, Body, Header } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
import { ProductService } from './products.service';

@Controller('/products')
export class ProductsContrller {
  // handling incoming post request
  constructor(private readonly productService: ProductService) {}
  @Post()
  addNewProduct(@Body() product: ProductDto) {
    console.log("-----", product)
    return this.productService.addNewProduct(product)
  }
}
