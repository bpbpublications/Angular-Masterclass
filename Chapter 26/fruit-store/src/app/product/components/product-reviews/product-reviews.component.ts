import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-reviews',
  templateUrl: './product-reviews.component.html',
  styleUrls: ['./product-reviews.component.css']
})
export class ProductReviewsComponent {
  productName?: string;
  product?: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    debugger;
    this.productName = this.activatedRoute.parent?.snapshot.params['name'];
    if (this.productName) {
      this.product = this.productService.getProduct(this.productName);
    }
  }

}
