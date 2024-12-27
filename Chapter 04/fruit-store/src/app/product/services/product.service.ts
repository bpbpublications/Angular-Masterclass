import { Injectable } from '@angular/core';
import { Product } from '../models/Product'
import { Log } from '../../shared/decorators/log.decorator';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('Apple', 6.99),
    new Product('Orange', 5.99),
    new Product('Banana', 3.99),
  ];

  @Log
  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  constructor() { }
}
