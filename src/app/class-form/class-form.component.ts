import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-class-form',
  templateUrl: './class-form.component.html',
  styleUrls: ['./class-form.component.scss']
})
export class ClassFormComponent implements OnInit {

  user: User = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
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
    confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])

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

  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.nameVal = this.myForm.value.name;
    this.emailVal = this.myForm.value.email;
    this.passwordVal = this.myForm.value.password;
    this.confirmPasswordVal = this.myForm.value.confirmPassword;
    // console.log(this.nameVal);
    // console.log(this.emailVal);
    // console.log(this.passwordVal);
    // console.log(this.confirmPasswordVal);

  }

  nameVal: any;
  emailVal: any;
  passwordVal: any;
  confirmPasswordVal: any;

  anoTher(data: any) {
    this.nameVal = data.name;
    this.emailVal = data.email;
    this.passwordVal = data.password;
    this.confirmPasswordVal = data.confirmPassword;
    // console.log(this.nameVal);
    // console.log(this.emailVal);
    // console.log(this.passwordVal);
    // console.log(this.confirmPasswordVal);
  }



}
