import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // Get all products
  @Get()
  findAll() {
    return this.productsService.findall();
  }
  // Get a product by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    // CHANGE ID TO NUMBER
    return this.productsService.findOne(+id);
  }
  // Create a new product
  @Post()
  create(@Body() body: CreateProductDto) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.productsService.create(body);
  }
}
