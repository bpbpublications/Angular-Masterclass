import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent {
  products: Product[];

  constructor(productService: ProductService) {
    productService.addProduct(new Product('Watermelon', 2.99));
    this.products = productService.getProducts();
  }

  getActiveClassName(product: Product) {
    return product.name.toLowerCase();
  }
}
