import { Component, Signal } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent {
  products: Signal<Product[] | undefined>;

  constructor(productService: ProductService) {
    this.products = productService.products;
    productService.getProducts();
  }

  getActiveClassName(product: Product) {
    return product.name.toLowerCase();
  }
}
