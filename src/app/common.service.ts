import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  createUser(user: any){
    user.dateOfBirth = user.dateOfBirth.getTime();
    return this.http.post("http://localhost:3000/users",user)
  }
  getAllUser(){
    return this.http.get("http://localhost:3000/users")
  }
  updateUser(user){
    return this.http.put("http://localhost:3000/users/" + user.id, user)
  }
  deleteUser(user){
    return this.http.delete("http://localhost:3000/users/" + user.id)
  }
}
