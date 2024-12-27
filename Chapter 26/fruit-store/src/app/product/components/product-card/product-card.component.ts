import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product?: Product;

  getImagePath() {
    return "./assets/images/" + this.product?.name.toLowerCase() + ".png";
  }
}
