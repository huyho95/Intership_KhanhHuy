import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm/confirm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NzNotificationModule
  ],
  exports: [
    ConfirmComponent,
    NzNotificationModule
  ],
  entryComponents: [
    ConfirmComponent // Khi nào mún khai báo pop up
  ]
})
export class SharedModule { }
