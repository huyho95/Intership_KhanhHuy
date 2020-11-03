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
  

  constructor(private commonService: CommonService,private modal: NzModalService) { }

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

  // deleteUser(user) {
  //   this.commonService.deleteUser(user).subscribe(()=>{
  //     this.getLatestUser();
  //   })
  // }

  updateUser() {
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

  // Hiện pop-up xóa user
  showDeleteConfirm(user): void {
    this.modal.confirm({
      nzTitle: `Are you sure delete ${ user.email } ?`,
      // nzContent: '<p>All information associated to profile will be permanently deleted.<br><span class="text-danger">This operation can not be undone.</span></p>',
      nzOnOk: () => this.commonService.deleteUser(user).subscribe(()=>{
        this.getLatestUser();
      }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }
}
