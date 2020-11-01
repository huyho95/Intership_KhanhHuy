import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor() { }

  getUser(): User[] {
    return [
      {
      id: '1',
      email: 'Huy',
      password: '123123'
    },
    {
      id: '2',
      email: 'admin',
      password: '123123'
    }]
  }

  isLogin(email: string, password: string): boolean {
    const listUser = this.getUser();
    return listUser.some((item, index) => item.email === email && item.password === password);
  }
}
