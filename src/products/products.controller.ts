import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
// import { ProductInterface } from 'src/types/IProduct';
import { ProductService } from './products.service';

@Controller('/products')
export class ProductsContrller {
  // handling incoming post requests
  constructor(private readonly productService: ProductService) {}
  
  // create product by post requests
  @Post("create")
  addNewProduct(@Body() product: ProductDto) {
    console.log("-----", product)
    return this.productService.addNewProduct(product)
  }

  // post to specific data - with id
  @Post("create/:id")
  postSpecificProduct(@Param("id") id:string){
    
  }

  // get the list of products
  @Get("lists")
  getAllProducts(){
    return this.productService.getAllProducts();
  }

  //get specific data by id
  @Get("lists/:id")
  getSpecificProduct(@Param("id") id:string){
    return this.productService.getSpecificProduct(id)
  }

  

}
