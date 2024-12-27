import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';
import * as e from 'express';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent {
  products: Product[] | undefined;

  constructor(productService: ProductService) {
    productService.getProducts().subscribe((data) => {
      try {
        this.products = data.sort();
      } catch (e) {
        console.log("Products not found");
      }
    });
  }

  getActiveClassName(product: Product) {
    return product.name.toLowerCase();
  }
}
