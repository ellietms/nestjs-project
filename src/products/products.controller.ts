import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductDto } from '../dtos/ProductDto.dto';
import {DatabaseProductDto} from "../dtos/DatabaseProductDto.dto"
import { ProductService } from './products.service';

@Controller('/products')
export class ProductsContrller {
  // handling incoming post requests
  constructor(private readonly productService: ProductService) {}

  // GET
  // get the list of products
  @Get('lists')
  getAllProducts() {
    return this.productService.getAllProducts();
  }

  //get specific data by id
  @Get('lists/:id')
  getSpecificProduct(@Param('id') id: string) {
    return this.productService.getSpecificProduct(id);
  }

  // POST
  // create product by post requests
  @Post('create')
  addNewProduct(@Body() product: ProductDto) {
    console.log('-----', product);
    return this.productService.addNewProduct(product);
  }

  // post to specific data - with id
  @Post('create/:id')
  postSpecificProduct(@Body() product: ProductDto, @Param('id') id: string) {
    return this.productService.postSpecificProduct(product, id);
  }


  // post to database
  @Post('database/create')
  @UsePipes(ValidationPipe)
  addNewProductDatabase(@Body() newProduct: DatabaseProductDto){
    console.log("========== POST DATABASE =====", newProduct);
    return this.productService.addNewProductDatabase(newProduct)
  }

  // Patch
  @Patch('update/:id')
  updateSpecificProduct(@Body() modifiedField: {}, @Param('id') id: string) {
    return this.productService.updateSpecificProduct(modifiedField, id);
  }

  //DELETE
  @Delete('delete/:id')
  deleteSpecificProduct(@Param('id') id: string) {
    return this.productService.deleteSpecificProduct(id);
  }

  // Get lists of deleted items
  @Get('/lists/deleted-items')
  getListsDeletedItems() {
    return this.productService.getListsDeletedItems();
  }
}
