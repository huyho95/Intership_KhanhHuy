import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { OverlayModule } from '@angular/cdk/overlay'

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogUpComponent } from './log-up/log-up.component';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { ColorNumberDirective } from './color-number.directive';
import { NzInputModule } from 'ng-zorro-antd/input';
import { CryptoJsService } from '../auth/crypto-js.service';
import { HttpClientModule } from '@angular/common/http';
import { UserLoginService } from './sign-in/shared/service/user-login.service';


@NgModule({
  declarations: [SignInComponent, SignUpComponent, LogUpComponent, ColorNumberDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayModule,
    NzFormModule,
    NzDatePickerModule,
    NzInputModule,
    HttpClientModule, 
  ],
  providers: [NzModalService, CryptoJsService, UserLoginService]

})
export class AuthModule { }
