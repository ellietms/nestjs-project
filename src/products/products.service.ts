import { Injectable } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
import {ProductEntity} from "../typeorm/ProductEntity";
import {DatabaseProductDto} from "../dtos/DatabaseProductDto.dto"
import { Repository } from "typeorm";
// import { ProductInterface } from 'src/types/IProduct';

@Injectable()
export class ProductService {
  products: ProductDto[] = [];
  private uniqueId: number = 0;
  deletedItems = []

  // constructor(@InjectRepository(ProductEntity) private  readonly databaseProductDto: databaseProductDtoRepository<ProductEntity>)

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

  // POST TO DATABASE

  addNewProductDatabase(newProduct: DatabaseProductDto){
    return newProduct;
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
  deleteSpecificProduct(productId:string){
    let filteredData = this.products.filter(eachData => eachData.id !== productId);
    let dataWithID = this.products.filter(eachData => eachData.id === productId);
    this.products = filteredData;
    this.deletedItems.push(dataWithID) 
     return {"CurrentDeletedItem": dataWithID, "ListsAllDeletedItems": this.deletedItems};
  }

 // ??
  getListsDeletedItems(){
    console.log(this.deletedItems)
    return {"deleted-items": this.deletedItems};
  }
}
