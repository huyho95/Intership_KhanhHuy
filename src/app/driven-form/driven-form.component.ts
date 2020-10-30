import { Component, OnInit } from '@angular/core';

import { DrivenForm } from '../driven-form';

@Component({
  selector: 'app-driven-form',
  templateUrl: './driven-form.component.html',
  styleUrls: ['./driven-form.component.css']
})
export class DrivenFormComponent implements OnInit {

  submitted = false;
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(formSignIn: any) {
    this.submitted = true;
    console.log(formSignIn);
  }
}
