import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  submitted = false;
  

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router: Router){}
  // ngOnInit(): void {
  //   this.loginForm=this.formbuilder.group({
  //     email:[''],
  //     password:['']
  //   })
  // }
  loginForms = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',Validators.required)
  })

  login(){
    this.submitted=true;
    this.http.get<any>("http://localhost:3000/posts")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForms.value.email && a.password === this.loginForms.value.password
      });
      if(user){
        alert("loging successful");
        this.loginForms.reset();
        this.router.navigate(['dashboard'])
        
      }else{
        alert("user not found");
      }
    },err=>{
      alert("something went wrong")
    })
  }

  get email(){
    return this.loginForms.get('email');
  }

  get password(){
    return this.loginForms.get('password');
  }

}
