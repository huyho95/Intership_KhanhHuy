import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/model/user.model';
import { CommonService } from '../../common.service';
import { NzModalService } from 'ng-zorro-antd/modal';


@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.scss']
})
export class LogUpComponent implements OnInit {
  title = "angularCRUD";
  allUser: Object;
  isEdit = false;
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: ''
  }
  

  constructor(private commonService: CommonService, private _nzModalService: NzModalService ) { }

  ngOnInit(): void {
    this.getLatestUser();
  }
  
  addUser(myForm) {
    // console.log(myForm.value)
    this.commonService.createUser(myForm.value).subscribe((response)=>{
      this.getLatestUser();
    })
  }

  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }

  editUser(user) {
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user) {
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

  WithZorroConfirm(message: string) {
    return function (target: Object, key: string | symbol, descriptor: PropertyDescriptor) {
      const original = descriptor.value;
  
      descriptor.value = function (...args: any[]) {
        const modal: NzModalService = this._nzModalService;
        
        modal.confirm({
          nzTitle: message,
          nzOnOk: () => {
            original.apply(this, args);
          }
        });
      };
  
      return descriptor;
    };
  }

  // @WithZorroConfirm('Are you sure to delete this?')
  // showDeleteConfirm(){
    
  // }
}
