import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { Product } from '../models/Product';

describe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the list of products', () => {
    expect(service.getProducts()).toEqual([
      new Product('Apple', 6.99),
      new Product('Orange', 5.99),
      new Product('Banana', 3.99),
    ]);
  });
});
