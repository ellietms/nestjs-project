import { Module } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsContrller } from "./products.controller";
import { ProductService } from "./products.service";


@Module({
    // import:[],
    controllers:[ProductsContrller],
    providers:[ProductService]
})

export class ProductModule{}