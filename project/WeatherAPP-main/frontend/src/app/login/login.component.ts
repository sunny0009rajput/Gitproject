import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flag:boolean=false;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  formGroup: FormGroup;
  errMsg: string | undefined;

  constructor(builder: FormBuilder, private authService: AuthenticationService,
    private router: Router) {
    this.usernameCtrl = builder.control('',[Validators.required,Validators.minLength(2)]);
    this.passwordCtrl = builder.control('',[Validators.required,Validators.minLength(8),Validators.maxLength(12)]);
    this.formGroup = builder.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnInit(): void {
  }


  onFormSubmit() {
    const username = this.usernameCtrl.value;
    const password = this.passwordCtrl.value;

    const observable: Observable<string> = this.authService.login(username, password);
    observable.subscribe({
      next: (token: string) => {
        console.log("received token", token);
        this.errMsg = undefined;
        this.authService.saveToken(username, token);
        this.router.navigate(['/dashboard']);
      },
      error: (err: Error) => {
        this.errMsg = err.message;
        this.flag=true;
        setInterval(()=>{
          this.flag=false;
        },2000);
      }
    });
    console.log("inside onFormSubmit username=" + username + " ,password=" + password);

  }


}
