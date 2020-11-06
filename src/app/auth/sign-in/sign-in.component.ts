import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UserLoginService } from 'src/app/shared/service/user-login.service';
import { UserLoginService } from './shared/service/user-login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  submitted: boolean;
  public message = "email or password is incorrect"
  constructor(
    private userLoginService: UserLoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  // onSubmit(formSignIn: any) {
  //   this.submitted = true;
  //   const isLogin = this.userLoginService.isLogin(formSignIn.form.value.email, formSignIn.form.value.password);
  //   if (isLogin) {
  //     localStorage.setItem('shit', JSON.stringify(formSignIn.form.value) ); // JSON.stringify: chuyển object thành json trên local localStorage
  //     this.router.navigate(['/dashboard']);
  //   }
  // }  

  onSubmit(formSignIn: any) {
    this.submitted = true;
    this.userLoginService.isLogin(formSignIn.form.value.email, formSignIn.form.value.password).subscribe(res => {
    if (res) {
      // localStorage.setItem('shit', JSON.stringify(formSignIn.form.value) ); // JSON.stringify: chuyển object thành json trên local localStorage
      this.router.navigate(['/dashboard']);
    }
    else return alert(this.message)
    })
   
  }

}
