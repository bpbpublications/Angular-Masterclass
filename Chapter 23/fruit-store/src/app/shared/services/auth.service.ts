import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private signedInUserSubject: BehaviorSubject<any>;
  public signedInUser: Observable<any>;

  constructor(private http: HttpClient) {
    this.signedInUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('signedInUser') || '{}'));
    this.signedInUser = this.signedInUserSubject.asObservable();
  }

  public get signedInUserValue(): any {
    return this.signedInUserSubject.value;
  }

  signup(user: { email: string, password: string }) {
    return this.http.post<any>('/api/signup', user)
      .pipe(map(response => {
        return response;
      }));
  }

  signin(email: string, password: string) {
    return this.http.post<any>('/api/signin', { email, password })
      .pipe(map(response => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          const user = this.getUserFromToken();
          this.signedInUserSubject.next(user);
        }
        return response;
      }));
  }
  
  signout() {
    localStorage.removeItem('token');
    this.signedInUserSubject.next(null);
  }

  private getUserFromToken(): any {
    const token = localStorage.getItem('token');
    if (token) {
      return jwtDecode(token);
    }
    return null;
  }
}