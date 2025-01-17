import { Injectable } from '@angular/core';
import { Product } from '../models/Product'
import { Log } from '../../shared/decorators/log.decorator';

@Injectable()
export class ProductService {
  products: Product[] = [
    new Product('Apple', 6.99, "Cananda"),
    new Product('Orange', 5.99, "India"),
    new Product('Banana', 3.99, "Mexico"),
    new Product('Guava', 4.99, "Mexico"),
    new Product('Blueberry', 5.99, "Canada"),
    new Product('Strawberry', 6.99, "USA"),
    new Product('Grapes', 2.99, "USA"),
    new Product('Watermelon', 2.99, "USA"),
  ];

  @Log
  getProducts() {
    return this.products;
  }

  getProduct(name: string) {
    return this.products.find(product => product.name === name);
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

  constructor() { }
}
