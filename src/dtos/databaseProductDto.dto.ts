import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class DatabaseProductDto {
    @IsNotEmpty()
    @IsString()
    id: string;
    
    @IsNotEmpty()
    @MinLength(5)
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
   