import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any>{
    let userRequest = new User();
    userRequest = {
      id: user.id,
      name: user.name,
      mobile: user.mobile,
      email: user.email,
      password: user.password,
      dateOfBirth: user.dateOfBirth.getTime(),
      pipeNumber: user.pipeNumber
    };
    return this.http.post('http://localhost:3000/users', userRequest);
  }

  

  // createUser(user: User): Observable<any>{
  //   return this.http.post('http://localhost:3000/users', user);
  // }
  getAllUser(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }
  updateUser(user): Observable<any>{
    return this.http.put('http://localhost:3000/users/' + user.id, user);
  }
  deleteUser(user): Observable<any>{
    return this.http.delete('http://localhost:3000/users/' + user.id);
  }
}
