import { ApiProperty } from "@nestjs/swagger";

export class ProductResponse {
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name: string;
    
    @ApiProperty()
    price: number;
    
    @ApiProperty()
    created_at: Date;

}