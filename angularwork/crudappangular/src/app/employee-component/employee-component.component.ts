import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { employeeModal } from '../modal/employeemodal';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.css']
})
export class EmployeeComponentComponent implements OnInit {
  formValue !: FormGroup;
  employeeModalObj : employeeModal= new employeeModal();
  employeeData !: any;
  shouldAdd !: boolean;
  shouldUpdate !: boolean;

  constructor (private formbuilder: FormBuilder,private apiservice: ApiService){}
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      firstName:[''],
      lastName:[''],
      email:[''],
      mobile:[''],
      salary:['']
      
    })
    this.getAllEmployee();
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.shouldAdd=true;
    this.shouldUpdate=false;
  }

  postEmployeeDetails(){
    this.employeeModalObj.firstName=this.formValue.value.firstName;
    this.employeeModalObj.lastName=this.formValue.value.lastName;
    this.employeeModalObj.email=this.formValue.value.email;
    this.employeeModalObj.mobile=this.formValue.value.mobile;
    this.employeeModalObj.salary=this.formValue.value.salary;

    this.apiservice.postEmployee(this.employeeModalObj)
    .subscribe(res=>{
      console.log(res);
      alert("Employee added Successfully")
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    },
    err=>{
      alert("Something went wrong");
    })
  }

  getAllEmployee(){
    this.apiservice.getEmployee()
    .subscribe(res=>{
      this.employeeData=res;

    })
  }

  deleteEmployee(data:any){
    this.apiservice.deleteEmployee(data.id)
    .subscribe(res=>{
      alert("Employee Deleted")
      this.getAllEmployee();
    })
  }

  onEdit(data:any){
    this.shouldAdd=false;
    this.shouldUpdate=true;
    this.employeeModalObj.id=data.id;
    this.formValue.controls['firstName'].setValue(data.firstName);
    this.formValue.controls['lastName'].setValue(data.lastName);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['salary'].setValue(data.salary);
  }

  updateEmployeeDetails(){
    this.employeeModalObj.firstName=this.formValue.value.firstName;
    this.employeeModalObj.lastName=this.formValue.value.lastName;
    this.employeeModalObj.email=this.formValue.value.email;
    this.employeeModalObj.mobile=this.formValue.value.mobile;
    this.employeeModalObj.salary=this.formValue.value.salary;
    this.apiservice.updateEmployee(this.employeeModalObj,this.employeeModalObj.id)
    .subscribe(res=>{
      alert("updated successfully");
      let ref =document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllEmployee();
    })
  }

}
