/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  // Lets add some dummy products for now
  private products = [
    { id: 1, name: 'Product A', price: 100 },
    { id: 2, name: 'Product B', price: 200 },
  ];
  //  My first work here is to crereate a method to get all products
  findall() {
    return this.products;
  }

  // My next work is to get a product by a specific id

  findOne(id: number) {
    return this.products.find((product) => product.id === id);
  }

  create(product) {
    this.products.push(product);
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return product;
  }
}
