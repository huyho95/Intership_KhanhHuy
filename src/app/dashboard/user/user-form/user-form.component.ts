import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/auth/sign-in/shared/service/user-login.service';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.userLoginService.getApiUser().subscribe(res => {
      console.log(res)
    });
  }
}
