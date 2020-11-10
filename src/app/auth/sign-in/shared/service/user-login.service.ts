import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { User } from '../model/user.model';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CryptoJsService } from '../../../crypto-js.service';
import { TokenParams } from '../../../tokenParams';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  url = 'http://hawadevapi.bys.vn/api/login';

  AccessToken:string = "";

  constructor(private http: HttpClient, private EncrDecr: CryptoJsService) { }
  
  getUser() : Observable<any> {
    return this.http.get("http://localhost:3000/users")
  }
  

  // isLogin(email: string, password: string): boolean {
  //   const listUser = this.getUser();
  //   return listUser.some((item, index) => item.email === email && item.password === password);
  // }

  // isLogin(email: string, password: string): Observable<boolean> {
  //   return new Observable(resObser => {
  //       this.getUser().subscribe(res => {
  //       const isLogin = res.some((item, index) => item.email === email && item.password === password);
  //     resObser.next(isLogin);
  //     // next(): sends any value such as Numbers, Arrays or objects to it’s subscribers.
  //     }, err => {})
  //   })
  // }

  loginConnectApi(a: string, b: string): Observable<TokenParams> {
    return this.http.post<any>(this.url, { userName: a, password: this.EncrDecr.set('uGa5buIox4+fX4ViZ7p3TyR4cx5evpoBqFsE8dueBqheYs6faRQ1VxCr0oQ1hqXQGyjc8rKA5kWXjHMxAByt0Q==', b) , "deviceType": "string",
    "token": "string"})
      // .map(res => res.json);    
  }
}
