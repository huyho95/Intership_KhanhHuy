import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { User } from '../model/user.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  getUser() : Observable<any> {
    return this.http.get("http://localhost:3000/users")
  }

  isLogin(email: string, password: string): Observable<boolean> {
    return new Observable(resObser => {
      this.getUser().subscribe(res => {
        const isLogin = res.some((item, index) => item.email === email && item.password === password);
        resObser.next(isLogin);
      }, err => {})
    })
   
  }
}
