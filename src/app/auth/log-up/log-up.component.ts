import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from 'src/app/shared/model/user.model';
import { CommonService } from './shared/service/common.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { gmailValidators } from './validators/custom.validators';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.scss']
})
export class LogUpComponent implements OnInit {
  title = 'CrudAngular';
  formLogUp: FormGroup;
  // submitted = false;
  allUser: {Object}; 
  isEdit = false;
  alert = false;
  // public message = "Sign Up success";
  userObj = {
    name: '',
    mobile: '',
    email: '',
    password: '',
    dateOfBirth: '',
    id: ''
  };
  unamePattern = new RegExp('^[a-zA-Z0-9\_]+$');
  // str = this.userObj.name;
  // regex = new RegExp("^[a-zA-Z0-9\_]+$");
  // + : xuất hiện 1 hoặc nhiều lần

  date: null;

  constructor(private commonService: CommonService, private modal: NzModalService, private router: Router) { }

  ngOnInit(): void {
    this.formLogUp = new FormGroup({
      id: new FormControl(this.userObj.id),
      name: new FormControl(this.userObj.name, [Validators.required, Validators.pattern(this.unamePattern)]),
      mobile: new FormControl(this.userObj.mobile),
      email: new FormControl(this.userObj.email, [Validators.required,gmailValidators]),
      password: new FormControl(this.userObj.password),
      dateOfBirth: new FormControl(this.userObj.dateOfBirth)
    });

    this.getLatestUser();
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

  get dateOfBirth() {
    return this.formLogUp.get('dateOfBirth');
  }


  // Add User
  addUser(formLogUp) {
    // this.submitted = true;
    // if (this.regex.test(this.str)) {
      // this.commonService.createUser(formLogUp.value).subscribe((response)=>{
      // this.getLatestUser();
      // })
    // }   Chưa làm ra
    this.commonService.createUser(formLogUp.value).subscribe((response) => {
      this.getLatestUser();
      })
  }
  
  // getAllUser
  getLatestUser(){
    this.commonService.getAllUser().subscribe((response) => {
      this.allUser = response;
    })
  }

  // Edit user
  editUser(user) {
    this.isEdit = true;
    // this.userObj = user;
    this.formLogUp.reset(this.userObj);
    //reset: The form now resets, all the input fields go back to their initial state and any valid, touched or dirty properties are also reset to their starting values.
    // trả về giá trị ban đầu của form, tất cả là giá trị là rỗng name:'', mobile:'', email='', password=''
    this.formLogUp.patchValue(user);
    // set giá trị của user được click "edit" hiện có vào lại, lúc này chưa update
    console.log(user)
  }

  // deleteUser(user) {
  //   this.commonService.deleteUser(user).subscribe(()=>{
  //     this.getLatestUser();
  //   })
  // }

  // Update user
  updateUser() {
    // this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.formLogUp.value).subscribe(() => {
      this.getLatestUser();
    })
  }

  // Hiện pop-up xóa user
  
  showDeleteConfirm(user): void {
    this.modal.confirm({
      nzTitle: `Are you sure delete ${ user.email } ?`,
      // nzContent: '<p>All information associated to profile will be permanently deleted.<br><span class="text-danger">This operation can not be undone.</span></p>',
      nzOnOk: () => this.commonService.deleteUser(user).subscribe(() => {
        this.getLatestUser();
      }),
      nzCancelText: 'No',
      nzOnCancel: () => console.log('Cancel')
    });
  }

  // Pipe date
  onChange(result: Date): void {
    console.log('onChange:', result);
  }
}
