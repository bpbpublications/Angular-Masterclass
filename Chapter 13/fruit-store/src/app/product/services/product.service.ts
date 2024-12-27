import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../models/Product'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  apiUrl = '/api';  
  private productsSignal = signal<Product[] | undefined>(undefined);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  products = computed(() => this.productsSignal());
  loading = computed(() => this.loadingSignal());
  error = computed(() => this.errorSignal());

  constructor(private http: HttpClient) { }
  
  getProducts() {
    this.loadingSignal.set(true);
    this.errorSignal.set(null);
    this.http.get<Product[]>(`${this.apiUrl}/products`)
    .subscribe({
      next: (products) => {
        this.productsSignal.set(products);
        this.loadingSignal.set(false);
      },
      error: (err) => {
        this.errorSignal.set('Failed to load users');
        this.loadingSignal.set(false);
      }
    });
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
