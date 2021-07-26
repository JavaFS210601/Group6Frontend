import { Injectable } from '@angular/core';
import {Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService}  from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
 
  constructor(public auth: AuthService, public router: Router) {}

  /*
  This method is called when the user try to enter a specific link
  */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
      if (!this.auth.isAuthenticated()) {
        
        this.router.navigate(['home']);
        return false;
      }
      return true;
  }
  
}
