import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http: HttpClient) { }

  createUser(user){
    return this._http.post("http://localhost:3000/users",user);
  }
  getAllUser(){
    return this._http.get("http://localhost:3000/users")
  }
  updateUser(){}
  deleteUser(){}
}
