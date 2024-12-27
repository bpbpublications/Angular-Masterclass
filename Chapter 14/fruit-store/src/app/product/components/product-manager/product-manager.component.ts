import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css'],
  providers: [ProductService]
})
export class ProductManagerComponent {
  constructor(productService: ProductService) {
    productService.addProduct(new Product('Peach', 6.49));
  }
}
