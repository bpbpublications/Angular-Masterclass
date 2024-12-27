import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const userToken = localStorage.getItem('token');
      if (userToken) {
          // authorized, return true
          return true;
      }

      // not signed in, redirect to signin page
      const sessionId = 12345;
      this.router.navigate(['/signin'], { state: { sessionId } });
      return false;
  }
}