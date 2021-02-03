import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class ProductDto{
    @ApiProperty({
        type: String,
        description: 'Name of Product'
    })
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({
        type: Number,
        description: 'Price of Product'
    })
    @IsNotEmpty()
    price: number;
    
}