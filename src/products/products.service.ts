import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
// import { ProductInterface } from 'src/types/IProduct';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class ProductService {
  products: ProductDto[] = [];
  private uniqueId : number = 0;
  addNewProduct(product: ProductDto) {
    this.uniqueId++;
    product['id'] = this.uniqueId.toString()
    this.products.push(product);
    return this.products;
  }

  getAllProducts() {
    return this.products;
  }

  getSpecificProduct(productId: string){
   let getProductById = this.products.filter(eachProduct => eachProduct.id === productId)
   return getProductById
  }
}
