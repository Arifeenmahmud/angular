import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';



export interface User {
  name: string;
  email: string;
  password: string;
}


@Component({
  selector: 'app-form-val',
  templateUrl: './form-val.component.html',
  styleUrls: ['./form-val.component.css']
})


export class FormValComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: ''
  };

  constructor() {
    this.user = {} as User;
  }

  ngOnInit(): void {
  }

  color = new FormControl('');

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  get name() {
    return this.myForm.get('name');
  }

  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  nameVal: any;
  emailVal: any;
  passwordVal: any;

  onSubmit() {
    console.log(this.myForm.value);
    this.nameVal = this.myForm.value.name;
    this.emailVal = this.myForm.value.email;
    this.passwordVal = this.myForm.value.password;

  }


}
