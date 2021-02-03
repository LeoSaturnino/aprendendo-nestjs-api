import { ProductDto } from './../../dto/product.dto';
import { ProductResponse } from './../../api-doc/product.response';
import { Product } from './../../models/product.model';
import { Body, ClassSerializerInterceptor, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiCreatedResponse, ApiOkResponse, ApiResponse } from '@nestjs/swagger';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('products')
export class ProductController {

    constructor(
        @InjectRepository(Product)
        private productRepo: Repository<Product>
    ) {

    }

    @Get()
    index() {
        return this.productRepo.find();
    }

    @ApiOkResponse({
        type: ProductResponse
    })
    @Get(':id')
    show(@Param('id') id: string) {
        return this.productRepo.findOneOrFail(id);
    }

    @ApiCreatedResponse({
        type: ProductResponse
    })
    @Post()
    store(@Body(new ValidationPipe({errorHttpStatusCode: 422})) body: ProductDto) {
        const product = this.productRepo.create(body);
        return this.productRepo.save(product);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: ProductDto) {
        const product = await this.productRepo.findOneOrFail(id);
        this.productRepo.update({ id: +id }, body);
        return this.productRepo.findOne(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string) {
        await this.productRepo.findOneOrFail(id);
        return this.productRepo.delete(id);
    }
}
