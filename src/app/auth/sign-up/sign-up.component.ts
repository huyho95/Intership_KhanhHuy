import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { gmailValidators } from './validators/custom.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  submitted = false;
  formSignUp: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.formSignUp = new FormGroup({
    email: new FormControl('',[Validators.required, gmailValidators]),
    password: new FormControl('',[Validators.required, Validators.minLength(8)])
    })
  }

  onSubmitSignUp() {
    this.submitted = true;
    console.log(this.formSignUp.value);
  }
  

  get amail() {
    return this.formSignUp.get('email');
  }
  // Chưa hiểu get lắm
  get password() {
    return this.formSignUp.get('password');
  }


}
