import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [ProductService]
})
export class HomePageComponent {
  products: Product[];
  
  constructor(productService: ProductService) {
    productService.addProduct(new Product('Watermelon', 2.99));
    this.products = productService.getProducts();
  }
}
