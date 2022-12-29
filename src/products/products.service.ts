import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
// import { ProductInterface } from 'src/types/IProduct';

@Injectable()
export class ProductService {
  products: ProductDto[] = [];
  private uniqueId: number = 0;

  // GET
  getAllProducts() {
    return this.products;
  }

  getSpecificProduct(productId: string) {
    let getProductById = this.products.filter(
      (eachProduct) => eachProduct.id === productId,
    );
    return getProductById;
  }

  // POST
  addNewProduct(product: ProductDto) {
    this.uniqueId++;
    product['id'] = this.uniqueId.toString();
    this.products.push(product);
    return this.products;
  }

  postSpecificProduct(product: ProductDto, productId: string) {
    let getProductById = this.products.filter(
      (eachProduct) => eachProduct.id === productId,
    );
    getProductById.map((data) => {
      for (let eachProperty in data) {
        if (
          data[eachProperty] !== product[eachProperty] &&
          product[eachProperty] !== undefined
        ) {
          data[eachProperty] = product[eachProperty];
        }
      }
    });
    console.log('I am working =========> ', 'new data', getProductById);
    return getProductById;
  }

  // Patch - because I want to just change what I updated
  updateSpecificProduct(modifiedField: {}, productId: string) {
    let getProductById = this.products.filter(
      (eachProduct) => eachProduct.id === productId,
    );
    getProductById.map((data) => {
      for (let eachProperty in data) {
        if (modifiedField[eachProperty]) {
          data[eachProperty] = modifiedField[eachProperty]
        }
      }
    });
    console.log("MODIFIED ========//////=====>>", getProductById)
    return getProductById;
  }

  // DELETE
}
