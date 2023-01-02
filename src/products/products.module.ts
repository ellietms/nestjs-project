import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsContrller } from "./products.controller";
import { ProductService } from "./products.service";
import { ProductEntity } from "src/typeorm";


@Module({
    imports:[TypeOrmModule.forFeature([ProductEntity])],
    exports: [TypeOrmModule],
    controllers:[ProductsContrller],
    providers:[ProductService]
})

export class ProductModule{}