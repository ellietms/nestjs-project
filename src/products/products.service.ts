import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
// import { ProductInterface } from 'src/types/IProduct';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  products: ProductDto[] = [];
  addNewProduct(product: ProductDto) {
    product["id"] = uuidv4()
    this.products.push(product);
    return this.products;
  }
}
