import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenService } from '../services/authen.service';
import { LoginComponent } from '../authen/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenGuard implements CanActivate{

  constructor(private authen: AuthenService, private route: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authen.isLoggedin()){
      return true;
    }else{
      this.route.navigate(['/']);
    }
  }
  
}
