import { Component, Input, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {
  @Input() data;
  cvName = '';
  cvDescription = '';

  constructor(
    private modal: NzModalRef
  ) { }

  ngOnInit(): void {
    this.cvName = this.data.cvName;
    this.cvDescription = this.data.cvDescription;
  }

  update() {
    this.modal.destroy({ cvName: this.cvName,  cvDescription: this.cvDescription });
  }

  a = 0

  cancel() {
    this.modal.destroy();
  }
  

}
