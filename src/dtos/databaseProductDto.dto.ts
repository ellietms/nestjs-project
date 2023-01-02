import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class databaseProductDto {
    @IsNotEmpty()
    @IsString()
    id: string;
    
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    name: string;
    
    @IsNotEmpty()
    @MinLength(5)
    @IsString()
    description: string;
    
    @IsNotEmpty()
    @IsNumber()
    price: number;
  }
   