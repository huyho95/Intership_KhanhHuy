import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/auth/sign-in/shared/service/user-login.service';
import { User } from '../shared/model/user.model'
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;
  isVisible = false;
  formEditApiUser: FormGroup;
  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void {
    this.userLoginService.getApiUser().subscribe((res) => {
      this.user = res.data;
      console.log(this.user)
    });

    this.formEditApiUser = new FormGroup({
      fullName: new FormControl(),
      userName: new FormControl(),
      email: new FormControl()
    })
  }

  get fullName() {
    return this.formEditApiUser.get('fullName');
  }

  get userName() {
    return this.formEditApiUser.get('userName');
  }

  get email() {
    return this.formEditApiUser.get('email');
  }

  editUser() {
    this.isVisible = true;
    this.formEditApiUser.reset(this.user);
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
