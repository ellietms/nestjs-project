import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  products: ProductDto[] = [];
  addNewProduct(products: ProductDto) {
    this.products.push(products);
    return this.products;
  }
}
