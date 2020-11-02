import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-log-up',
  templateUrl: './log-up.component.html',
  styleUrls: ['./log-up.component.scss']
})
export class LogUpComponent implements OnInit {
  allUser: Object;

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getLatestUser();
  }

  addUser(myForm) {
    console.log(myForm.value)
    this.commonService.createUser(myForm.value).subscribe((response)=>{
      this.getLatestUser();
    })
  }

  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }
}
