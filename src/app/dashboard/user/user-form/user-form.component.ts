import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/auth/sign-in/shared/service/user-login.service';
import { User } from '../shared/model/user.model'
import { FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import { NzModalService } from 'ng-zorro-antd/modal';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;
  isVisible = false;
  formEditApiUser: FormGroup;
  formEdit : FormGroup;

  url: string [] = [];
  
  constructor(private userLoginService: UserLoginService, private fb: FormBuilder, private modal: NzModalService) { }

  ngOnInit(): void { // ??????????????
    this.userLoginService.getApiUser().subscribe((res) => {
      // Đây là user lúc lấy về
      this.user = res.data;
      console.log(this.user)
    });

    this.formEditApiUser = new FormGroup({
      fullName: new FormControl(),
      fullNameUser: new FormControl(),
      accountEmail: new FormControl(),
    })

    // Start: Form Array kết hợp Form Builder

    // this.formEdit = this.fb.group({
    //   cvName: '',
    //   cvDescription: '',
    //   formParent: this.fb.array([this.createForm()])
    // })

    this.formEdit = this.fb.group({
      works: this.fb.array([
        this.fb.group ({
          cvName: '',
          cvDescription: '',
          works: this.fb.array([
        //  this.createForm()
          ])
        })
      ])
    })

  }

  createForm(): FormGroup {
    return this.fb.group({
      cvName: '',
      cvDescription: '',
      works: this.fb.array([]) // Đây là formArray con của formGroup 1 công việc
    })
  } 
  addFormParent(formArray: FormArray) {
    formArray.push(this.createForm());
    console.log(this.formEdit)
  }

  addFormChild(formGroup: FormGroup) {
    (formGroup.get('works') as FormArray).push(this.createForm());
    console.log(this.formEdit)
  }

  // removeCV(formArray: any, index: number) {
  //   formArray.splice(index, 1);
  // }
  // .controls mới dùng hàm xóa này được

  removeCV(formArray: FormArray, index: number) {
    formArray.removeAt(index)
  }

  // get formParent() {
  //   return this.formEdit.get('formParent') as FormArray;
  // }
  
  // addCV(index): void {
  //   if (this.formEdit.controls.formParent)
  //   // Dòng if ni để làm chi, để xét coi thử hắn có giá trị hay không á
  //   // Cái chi có giá trị formArray, this.formEdit đang là formGroup, .controls => ra các formCotrol của formGroup formEdit
  //   // . formArray nữa là cái chi :)), bữa sau đặt tên chuẩn xíu nghe Huy, đặt tền loạn xạ :))
  //   // OKie,uif rồi răng nữa, đang bị lỗi add form ,hắn vẫn hiện chữ ta nhập lên dòng mới kìa, trong khi set biến mới có giá trị new rồi đóây
  //   {
  //     // this.formParent.controls.push(this.createForm());
  //     this.formParent.insert(index = index + 1, this.createForm());
  //   }
  //   console.log(this.formEdit)
  // }

  // addExtraCV(form: FormGroup, index) {
  //   if (this.formEdit.controls.formParent)
  //   {
  //     // (form.get('formChild') as FormArray).controls.push(this.createForm());
  //     (form.get('formChild') as FormArray).insert(index= index + 1, this.createForm());
  //   }
  //   console.log(this.formEdit)
  // }

  // removeCV(index): void {
  //   this.formParent.controls.splice(index, 1)
  //   // Xóa bắt đầu từ phần tử số index (index truyền vào), xóa 1 phần tử 
  // }   

  // removeExtraCV(form: FormGroup, index: number) {
  //   (form.get('formChild') as FormArray).controls.splice(index,1)
  // }

  // End: Form Array kết hợp Form Builder




  // Start Pop up show thông tin

  showInfo(form: FormGroup): void {
    const modal = this.modal.create({
      nzTitle: 'Modal Title',
      nzContent: ConfirmComponent,
      nzComponentParams: {
        data: {
          cvName : form.value.cvName,
          cvDescription: form.value.cvDescription
        },
      }, 
    });
    // Return a result when closed
    // modal.afterClose.subscribe(result => {
    //   form.get('cvName').setValue(result.cvName);
    //   form.get('cvDescription').setValue(result.cvDescription);
    //   }
    // ); // set value form control

    modal.afterClose.subscribe(result => {
      if(result) {
        form.patchValue({
          cvName : result.cvName,
          cvDescription: result.cvDescription
        });
      }
      }
    ); // set value form group
  }




  // End Pop up show thông tin

  // Biến get fullName này đang trả về 1 giá trị là formControl
  get fullName() {
    return this.formEditApiUser.get('fullName');
  }

  get representativeName() {
    return this.formEditApiUser.get('fullNameUser');
  }

  get accountEmail() {
    return this.formEditApiUser.get('accountEmail');
  }

  

  get cvName() {
    return this.formEdit.get('cvName');
  }

  get cvDescription() {
    return this.formEdit.get('cvDescription');
  }


  // Start Pop up Edit User

  editUser(user) {
    this.isVisible = true;
    this.formEditApiUser.reset(user);
  }

  updateUser(): void {
    this.isVisible = false;

    // Value truyền vô để gọi API ở dưới updateApiUser
    // Đang là giá trị của form this.formEditApiUser.value, vì thế chỉ có 3 trường, thay vì đủ tất cả các trường như API yêu cầu
    // ời, thì ren ??
    // Huy nghe, Quyền quất Huy cái chừ.
    // Bây giờ gửi cái cái objet lúc get vô lên lại, xem API có báo lỗi gì không
    // Thử gửi lên lại object đã nhận lên lại xem thử
    // Ngay chỗ ni, muốn sửa trường nào thì update trruowfng đó cho thisiuser okie
    // Mi muốn t qua lặt cái lông mi không
    // Code sai rồi
    // Update giá trị của trường trước khi gửi lên lại cho API
    // Trước khi gọi hàm this.userLoginService.updateApiUser để gọi API update với body truyền lên là this.user
    // Thì update giá trị fullName của this.user, để ta có object gửi lên là object như cũ và chỉ sửa 1 mình trường fullName
    // this.user.fullName = 'Test code';
    // mapping giá trị của các field cần update ngay tài đây, giá trị được lấy từ formEditApiUser
    // Code thử t coi na
    this.user.fullName = this.formEditApiUser.get('fullName').value;
    this.user.fullNameUser = this.formEditApiUser.get('fullNameUser').value;
    this.user.accountEmail = this.formEditApiUser.get('accountEmail').value;

    // fullName chỗ này hiện đang là 1 FormControl từ formGroup formEditApiUser, nên muốn getvalue của formContro af
    // Muốn lấy giá trị của formControl, thì .value nữa
    // Thử lại và xem body truyền lên thế nào nhé.
    this.userLoginService.updateApiUser(this.user).subscribe((res) => {
      // Chỗ này là API trả về res là update thành công hay chưa
      // this.user = res.data.fullName;
      // this.user = res.data.fullName;
      // this.user = res.data.fullName;
      this.user = res.data;
      console.log(this.user)
    });
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  // End pop up Edit User

  

  // Upload Image
  onSelectFile(event) {
    if(event.target.files) {
      var reader = new FileReader();
      // target.files cái này đang là mảng, nên lấy file đầu tiên là file up lên, ủa mình upleen mới có file chớ, răn file đầu tiên
      // target.files hắn là kiểu array, cho nên mi up vô là 1 file là phần tử đầu tiên
      // Ví dụ, bay giờ cho phép upload nhiều file, thì target.files là mảng nhiều file nớ đó
      // Vì cái input dạng upload file nớ có thể upload nhiều file nên kiểu dữ liệu target.files phải là kiểu mảng
      // rứa số 0 nớ mình tự gán hả
      // Thì bây giờ mi không cho hắn upload mutiple thì chắc chắn nếu có file thì chỉ có 1 file
      // thì làphaair tử đầu tiên chi nữa
      
      // Chô ni muốn onload thì phải là kiểu FileReader mà, mi sửa rứa thì a đâu phải là kiểu FileReader
      // Chỗ ni hắn sẽ chạy như thế này, cứ hiểu thế này nhé
      // reader.readAsDataURL => sẽ đọc file mi up lên thành 1 đường dẫnuurl
      // lúc nào hành động biến file thành đường dẫn url thì sẽ nhảnh vô hàm onload
      // Hàm onload ni đang subcrice thằng đường dẫnnurl nớ, nếu xong thì hắn nhảy vô chỗ ni
      if(event.target.files[0]){
        reader.readAsDataURL(event.target.files[0]);
      } 
      reader.onload = (e: any)=>{
        console.log(e) 
        this.url = e.target.result;
      }
      console.log(event)
      for (var i = 0; i < event.target.files.length; i++) { 
        
      }
    }

  }
}
