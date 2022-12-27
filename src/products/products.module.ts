import { Module } from "@nestjs/common";
import { ProductsContrller } from "./products.controller";
import { ProductService } from "./products.service";

@Module({
    controllers:[ProductsContrller],
    providers:[ProductService]
})

export class ProductModule{}