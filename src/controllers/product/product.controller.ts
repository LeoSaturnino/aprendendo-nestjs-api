import { Product } from './../../models/product.model';
import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

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

    @Get(':id')
    show(@Param('id') id: string) {
        return this.productRepo.findOneOrFail(id);
    }

    @Post()
    store(@Body() body) {
        const product = this.productRepo.create(body);
        return this.productRepo.save(product);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body) {
        const product = await this.productRepo.findOneOrFail(id);
        this.productRepo.update({ id: +id }, body);
        return this.productRepo.findOne(id);
    }

    @Delete(':id')
    @HttpCode(204)
    async delete(@Param('id') id: string){
        await this.productRepo.findOneOrFail(id);
        return this.productRepo.delete(id);
    }
}
