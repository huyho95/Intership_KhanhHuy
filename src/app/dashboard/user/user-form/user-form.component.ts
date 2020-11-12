import { Component, OnInit } from '@angular/core';
import { UserLoginService } from 'src/app/auth/sign-in/shared/service/user-login.service';
import { User } from '../shared/model/user.model'
import { FormGroup, FormControl} from '@angular/forms';
@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  user: User;
  isVisible = false;
  formEditApiUser: FormGroup;
  constructor(private userLoginService: UserLoginService) { }

  ngOnInit(): void { // ??????????????
    this.userLoginService.getApiUser().subscribe((res) => {
      // Đây là user lúc lấy về
      this.user = res.data;
      console.log(this.user)
    });

    this.formEditApiUser = new FormGroup({
      fullName: new FormControl(),
      fullNameUser: new FormControl(),
      accountEmail: new FormControl()
    })
  }

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
}
