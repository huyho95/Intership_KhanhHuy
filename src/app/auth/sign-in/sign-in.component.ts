import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UserLoginService } from 'src/app/shared/service/user-login.service';
import { UserLoginService } from './shared/service/user-login.service';
// import { CryptoJsService } from '../crypto-js.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  hide = true;
  submitted: boolean;
  // public message = "email or password is incorrect";
  message = "Login successfully !!"


  constructor(
    private userLoginService: UserLoginService,
    private router: Router,
    // private EncrDecr: CryptoJsService,
    
  ) { }

  ngOnInit(): void {
    // var encrypted = this.EncrDecr.set('uGa5buIox4+fX4ViZ7p3TyR4cx5evpoBqFsE8dueBqheYs6faRQ1VxCr0oQ1hqXQGyjc8rKA5kWXjHMxAByt0Q==', '123123');
    // console.log('Encrypted :' + encrypted);
  }

  // onSubmit(formSignIn: any) {
  //   this.submitted = true;
  //   const isLogin = this.userLoginService.isLogin(formSignIn.form.value.email, formSignIn.form.value.password);
  //   if (isLogin) {
  //     localStorage.setItem('shit', JSON.stringify(formSignIn.form.value) ); // JSON.stringify: chuyển object thành json trên local localStorage
  //     this.router.navigate(['/dashboard']);
  //   }
  // }  

  // onSubmit(formSignIn: any) {
  //   this.submitted = true;
  //   this.userLoginService.isLogin(formSignIn.form.value.email, formSignIn.form.value.password).subscribe(res => {
  //   if (res) {
  //     // localStorage.setItem('shit', JSON.stringify(formSignIn.form.value) ); // JSON.stringify: chuyển object thành json trên local localStorage
  //     this.router.navigate(['/dashboard']);
  //   }
  //   else return alert(this.message)
  //   })
   
  // }



  // onSubmit(formSignIn: any) {
  //   this.submitted = true;
  //   this.userLoginService.loginConnectApi(formSignIn.form.value.email, formSignIn.form.value.password).subscribe(res => {
  //     // localStorage.setItem('shit', JSON.stringify(formSignIn.form.value) ); // JSON.stringify: chuyển object thành json trên local localStorage
  //     // this.router.navigate(['/dashboard']);
  //     console.log(res)
      
  //   }, err => {
  //     console.log('Lỗi rồi', err.error.error.message)
  //   }) 
  // }



  onSubmit(formSignIn: any) {
    this.submitted = true;
    this.userLoginService.loginConnectApi(formSignIn.form.value.email, formSignIn.form.value.password).subscribe(res => {
      // localStorage.setItem('shit', JSON.stringify(formSignIn.form.value) ); // JSON.stringify: chuyển object thành json trên local localStorage
      // this.router.navigate(['/dashboard']);

       // localStorage.setItem('userLogin', res.data.jwtToken)
      // this.userLoginService.getApiUser().subscribe(res => {
      // this.router.navigate(['/dashboard/user'])
      //   console.log(res)
      // }); 

      localStorage.setItem('userLogin', JSON.stringify(res.data))
      // local storage chỉ lưu dữ liệu ở dạng string, không lưu được Object

      //JSON.stringify: chuyển object lại chuỗi string
      // localStorage.setItem('userLogin',b) với b là string, res.data.jwtToken khi chỉ lấy mình jwtToken (chuỗi string),
      // muốn lấy tất cả thông tin thì res.data, mà res.data đang là 1 Object nên phải dùng JSON.stringify để chuyển về chuỗi string

      // this.userLoginService.getApiUser().subscribe(res => {
      // this.router.navigate(['/dashboard/user'])
      //   console.log(res)
      // });
      this.router.navigate(['/dashboard/user'])
    }, err => {
      console.log('Lỗi rồi, err')
    }) 
  }
}
