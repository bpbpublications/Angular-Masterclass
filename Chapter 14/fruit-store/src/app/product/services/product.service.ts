import { Injectable } from '@angular/core';
import { Product } from '../models/Product'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  apiUrl = '/api';  
  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${name}`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiUrl}/products/${product.name}`, product);
  }

  deleteProduct(name: string): Observable<Object>{
    return this.http.delete(`${this.apiUrl}/products/${name}`);
  }
}
