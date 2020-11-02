import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogUpComponent } from './log-up/log-up.component';

@NgModule({
  declarations: [SignInComponent, SignUpComponent, LogUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]

})
export class AuthModule { }
