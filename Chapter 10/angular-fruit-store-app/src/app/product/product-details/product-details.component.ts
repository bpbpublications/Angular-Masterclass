import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductService]
})
export class ProductDetailsComponent {
  productName?: string | null;
  product?: Product;
  routeSub$: Subscription | null = null;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.routeSub$ = this.activatedRoute.queryParams.subscribe(param => {
      this.productName = param['name'];
      if (this.productName) {
        this.product = this.productService.getProduct(this.productName);
      }
    });
  }

  ngOnDestroy() {
    this.routeSub$?.unsubscribe();
  }
}
