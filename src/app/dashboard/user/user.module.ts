import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule  } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzModalModule,
    NzFormModule,
    SharedModule
  ],
  providers: [],
})
export class UserModule { }
