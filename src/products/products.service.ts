import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
// import { ProductInterface } from 'src/types/IProduct';


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

  postSpecificProduct(productId: string){
    
  }

  getAllProducts() {
    return this.products;
  }

  getSpecificProduct(productId: string){
   let getProductById = this.products.filter(eachProduct => eachProduct.id === productId)
   return getProductById
  }


}
