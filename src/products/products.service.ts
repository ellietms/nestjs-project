import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductDto } from '../dtos/ProductDto.dto';
import { ProductEntity } from '../typeorm/ProductEntity';
import { DatabaseProductDto } from '../dtos/DatabaseProductDto.dto';

@Injectable()
export class ProductService {
  products: ProductDto[] = [];
  private uniqueId: number = 0;
  deletedItems = [];

  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  // GET data from database
  async getAllProducts(){
    const result = await this.productRepository.find()
    return result;
  }

  getSpecificProduct(productId) {
    let getProductById = 
    this.productRepository.findOneBy(productId)
    // this.products.filter(
    //   (eachProduct) => eachProduct.id === productId,
    // );
    console.log("DATABASE ID FOUND", productId,getProductById )
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

  addNewProductDatabase(newProduct: DatabaseProductDto) {
    const myNewProduct = this.productRepository.create(newProduct);
    const newSavedData =  this.productRepository.save(myNewProduct);
    console.log("____KKKKKK_____", newSavedData)
    return newSavedData
  }

  // Patch - because I want to just change what I updated
  updateSpecificProduct(modifiedField: {}, productId: string) {
    let getProductById = this.products.filter(
      (eachProduct) => eachProduct.id === productId,
    );
    getProductById.map((data) => {
      for (let eachProperty in data) {
        if (modifiedField[eachProperty]) {
          data[eachProperty] = modifiedField[eachProperty];
        }
      }
    });
    console.log('MODIFIED ========//////=====>>', getProductById);
    return getProductById;
  }

  // DELETE
  deleteSpecificProduct(productId: string) {
    let filteredData = this.products.filter(
      (eachData) => eachData.id !== productId,
    );
    let dataWithID = this.products.filter(
      (eachData) => eachData.id === productId,
    );
    this.products = filteredData;
    this.deletedItems.push(dataWithID);
    return {
      CurrentDeletedItem: dataWithID,
      ListsAllDeletedItems: this.deletedItems,
    };
  }

  // ??
  getListsDeletedItems() {
    console.log(this.deletedItems);
    return { 'deleted-items': this.deletedItems };
  }
}
