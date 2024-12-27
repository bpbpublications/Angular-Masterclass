import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/Product';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent {
  products: Product[];
  isTabletPortrait = false;
  isPhonePortrait = false;

  constructor(productService: ProductService, private breakpoint: BreakpointObserver) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
    this.breakpoint.observe([Breakpoints.TabletPortrait, Breakpoints.HandsetPortrait])
      .subscribe(result => {
        this.isTabletPortrait = false;
        this.isPhonePortrait = false;

        const breakpoints = result.breakpoints;
        if (breakpoints[Breakpoints.TabletPortrait]) {
          this.isTabletPortrait = true;
        }
        else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.isPhonePortrait = true;
        }
      });
  }
}
