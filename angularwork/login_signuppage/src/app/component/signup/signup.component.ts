import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  // public signupForm !: FormGroup;
  constructor(private forrmbuilder : FormBuilder,private http : HttpClient,private router : Router){}
  // ngOnInit(): void {
  //   this.signupForm=this.forrmbuilder.group({
  //      fullName:[''],
  //      mobile:[''],
  //      email:[''],
  //      password:['']
  //   })
  // }

  signupForms= new FormGroup({
    fullName:new FormControl('',[Validators.required,Validators.minLength(4)]),
    mobile:new FormControl('',[Validators.required,Validators.pattern("[0-9 ]{12}")]),
    email:new FormControl('',[Validators.required,Validators.minLength(4),Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
  })


  signup(){
    this.http.post<any>("http://localhost:3000/posts",this.signupForms.value)
    .subscribe(res=>{
      alert("signup successfully");
      this.signupForms.reset();
      this.router.navigate(['login']);
    },err=>{
      alert("something went wrong")
    })
  }

  get fullName(){
    return this.signupForms.get('fullName');
  }

  get mobile(){
    return this.signupForms.get('mobile');
  }
  get email(){
    return this.signupForms.get('email');
  }
  get password(){
    return this.signupForms.get('password');
  }

}
