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
     
      if (this.auth.isAuthenticated() === 1) {
        
        //this.router.navigate(['admin']);
        return true;
      } 
      else if( this.auth.isAuthenticated() === 3 ){
        //this.router.navigate(['dashboard']);
        return true;
      } else {
        this.router.navigate(['/login']);
         return false;
       }
      return false;
  }
  
}
