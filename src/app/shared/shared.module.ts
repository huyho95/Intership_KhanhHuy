import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmComponent } from './confirm/confirm.component';



@NgModule({
  declarations: [
    ConfirmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConfirmComponent
  ],
  entryComponents: [
    ConfirmComponent // Khi nào mún khai báo pop up
  ]
})
export class SharedModule { }
