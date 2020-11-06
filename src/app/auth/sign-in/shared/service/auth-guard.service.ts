import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}
  canActivate(): boolean {
    if (!localStorage.getItem('shit')) { // Kiểm đã đăng nhập chưa
      this.router.navigate(['sign-in']);
      return false;
    }
    return true;
  }
}