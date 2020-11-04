import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/model/user.model';
import { CommonService } from '../../common.service';
import { NzModalService } from 'ng-zorro-antd/modal';

import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { gmailValidators } from './validators/custom.validators'

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.scss']
})
export class LogUpComponent implements OnInit {
  title = "angularCRUD";
  formLogUp: FormGroup;
  submitted = false;
  allUser: Object;
  isEdit = false;
  alert = false;
  // public message = "Sign Up success";
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    id: ''
  }
  

  constructor(private commonService: CommonService, private modal: NzModalService, private router: Router) { }

  ngOnInit(): void {
    this.formLogUp = new FormGroup({
      name: new FormControl('',Validators.pattern[('A-Za-z0-9_')]), 
      mobile: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    })

    this.getLatestUser();
  }
  
  addUser(formLogUp) {
    // console.log(formLogUp.value)
    this.submitted = true;
    this.commonService.createUser(formLogUp.value).subscribe((response)=>{
      this.getLatestUser();
      // alert(this.message)
      this.alert = true;
    })
  }

  get name() {
    return this.formLogUp.get('name');
  }
  // Chưa hiểu get lắm
  get mobile() {
    return this.formLogUp.get('mobile');
  }

  get email() {
    return this.formLogUp.get('email');
  }
  // Chưa hiểu get lắm
  get password() {
    return this.formLogUp.get('password');
  }
  
  

  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }

  // Edit user
  editUser(user) {
    this.isEdit = true;
    this.userObj = user;
  }

  // deleteUser(user) {
  //   this.commonService.deleteUser(user).subscribe(()=>{
  //     this.getLatestUser();
  //   })
  // }

  // Update user  
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
