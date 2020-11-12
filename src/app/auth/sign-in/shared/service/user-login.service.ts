import { Injectable } from '@angular/core';
// import { CanActivate } from '@angular/router';
// import { User } from '../model/user.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CryptoJsService } from '../../../crypto-js.service';
import { User } from 'src/app/auth/log-up/shared/model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  // urlApiLogin = `${environment.linkAPI}login`;
  // urlGetApiUser = "http://hawadevapi.bys.vn/api/user/get?accountId=4058208e-1c82-4540-84d2-b414f7b83f75";
  // urlGetApiUser = `${environment.linkAPI}user/getdetail?userId=99784ce6-aada-4c77-8405-8f3506900970`;
  


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



  loginConnectApi(a: string, b: string): Observable<any>{
    const url = `${environment.linkAPI}login`;
    // console.log('Ngu ngu', this.EncrDecr.set('uGa5buIox4+fX4ViZ7p3TyR4cx5evpoBqFsE8dueBqheYs6faRQ1VxCr0oQ1hqXQGyjc8rKA5kWXjHMxAByt0Q==', b))
    return this.http.post<any>(url, { userName: a, password: this.EncrDecr.set('uGa5buIox4+fX4ViZ7p3TyR4cx5evpoBqFsE8dueBqheYs6faRQ1VxCr0oQ1hqXQGyjc8rKA5kWXjHMxAByt0Q==', b) , "deviceType": "string",
    "token": "string"})
  }

  getApiUser(): Observable<any> {
    // const jwt = localStorage.getItem('userLogin');
    // return this.http.get<any>(this.url1, {headers: { Authorization: `Bearer ${jwt}`}});

    const jwt = JSON.parse(localStorage.getItem('userLogin')).jwtToken;
    const url = `${environment.linkAPI}user/getdetail?userId=99784ce6-aada-4c77-8405-8f3506900970`;
    // JSON.parse: chuyển chuỗi string thành object
    // userLogin bên sign-in.component.ts đang là chuỗi string, ở đây muốn chuyển về object để lấy ra từng phần tử bằng cách '.' thì dùng hàm JSON.parse
    return this.http.get<any>(url, {headers: { Authorization: `Bearer ${jwt}`}});
  }

  updateApiUser(user: any): Observable<any>{
    const jwt = JSON.parse(localStorage.getItem('userLogin')).jwtToken;
    const url = `${environment.linkAPI}user/updatedetail`;
    return this.http.put<any>(url, user, {headers: { Authorization: `Bearer ${jwt}`}})
  }
  
}
