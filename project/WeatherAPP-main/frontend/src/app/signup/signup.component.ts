import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Signup } from '../model/Signup';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {

  myform: FormGroup;
  usernameCtrl: FormControl;
  cityCtrl: FormControl;
  passwordCtrl: FormControl;
  
  repeatPasswordCtrl: FormControl;
  // checkCtrl: FormControl;
  user: Signup | undefined;
  constructor(public builder: FormBuilder,private service:AuthenticationService,private router:Router ) {
    this.usernameCtrl = builder.control('',[Validators.required,Validators.minLength(2)]);
    this.cityCtrl = builder.control('',[Validators.required,Validators.minLength(2)]);
    this.passwordCtrl = builder.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
    this.repeatPasswordCtrl = builder.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
    // this.checkCtrl = builder.control('');

    const myObj = {
      username: this.usernameCtrl,
      city: this.cityCtrl,
      password: this.passwordCtrl,
      repeatPassword: this.repeatPasswordCtrl,
      // check: this.checkCtrl,
    };
    this.myform = builder.group(myObj);
  }

  addUser() {
    let nameOfUser = this.usernameCtrl.value;
    let cityOfUser = this.cityCtrl.value;
    this.service.setCity(cityOfUser);
    let passwordOfUser = this.passwordCtrl.value;
    let repeatPasswordOfUser = this.repeatPasswordCtrl.value;
    // let checkBoxOfUser = this.checkCtrl.value;
    // console.log(this.checkCtrl);
    this.user = new Signup(
      nameOfUser,
      // emailOfUser,
      passwordOfUser,
      // checkBoxOfUser
    );
    console.log(this.user.username);
    console.log(this.user.password);
    // console.log(this.user.city);

    if (passwordOfUser !== '' && passwordOfUser === repeatPasswordOfUser && nameOfUser.length > 0) {
      const observer = {
        next: (result: Signup) => {
          this.user = result;
          console.log(result);
          this.router.navigate(['/login']);
          
        },
      };
      let observable: Observable<Signup> = this.service.addUser(this.user.username,this.user.password);
      observable.subscribe(observer);
      this.myform.reset();
    } else if (this.checkEmptyFeild()) {
      alert('Complete the empty fields');
    } else if (passwordOfUser != repeatPasswordOfUser) {
      alert('Password galat hai ');
    // } else if (checkBoxOfUser === false) {
    //   alert('Accept the Term and condition');
    // } else if (emailOfUser.includes('@') == false && emailOfUser.includes(".com")) {
    //   alert('email is not valid');
    }
  }

  checkEmptyFeild(): boolean {
    let nameValue = this.usernameCtrl.value;
    let cityValue = this.cityCtrl.value;
    let passwordValue = this.passwordCtrl.value;
    let repeatPasswordValue = this.passwordCtrl.value;

    return (
      nameValue.length == 0 ||
      cityValue.length == 0 ||
      passwordValue.length == 0 ||
      repeatPasswordValue.length == 0
    );
  }

  

} 

