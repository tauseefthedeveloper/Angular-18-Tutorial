import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { DepartmentService } from '../../services/department.service';
import { AlertComponent } from "../../resuableComponent/alert/alert.component";
import { MyButtonsComponent } from "../../resuableComponent/my-buttons/my-buttons.component";
import { IfelseComponent } from "../ifelse/ifelse.component";
import { Department } from '../../models/class/customer';
import { IDepartmentList } from '../../models/interface/IUsers';

@Component({
  selector: 'app-put-api',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonsComponent, IfelseComponent],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css'
})
export class PutApiComponent implements OnInit {

  ngOnInit(): void {
    this.getDepartment();
  }
  deptObj: Department = new Department() ;
  http = inject(HttpClient);
  constructor(private deptSer: DepartmentService) {
    const result=this.deptSer.addTwoNo(20,30);
    console.log(result);
  }
  deptValue: IDepartmentList[]=[];
  // onSave(){
  //   this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",this.deptObj).subscribe((res:any)=>{
  //     if(res.result){
  //       this.getDepartment();
  //       alert("Department Created Successfully.")
  //     }else{
  //       alert(res.message)
  //     }
  //   })
  // }
  onSave() {
    this.deptSer.saveNewDept(this.deptObj).subscribe((res: any) => {
      if (res.result) {
        this.getDepartment();
        alert("Department Created Successfully.")
      } else {
        alert(res.message)
      }
    })
  }
  // getDepartment(){
  //   this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment").subscribe((res:any)=>{
  //     this.deptValue=res.data;
  //   })
  // }
  getDepartment() {
    this.deptSer.getAllDept().subscribe((res: any) => {
      this.deptValue = res.data;
    })
  }
  onEdit(data: any) {
    this.deptObj = data;
  }
  onUpdate() {
    this.http.post("/api/Complaint/UpdateDepartment", this.deptObj).subscribe((res: any) => {
      if (res.result) {
        this.getDepartment();
        alert("Department Updated Successfully.")
      } else {
        alert(res.message)
      }
    })
  }
  onDelete(id: number) {
    const isDeleteConfirms = confirm("Are you sure to delete?");
    if (isDeleteConfirms) {
      this.http.delete("/api/Complaint/DeletedepartmentBydepartmentId?departmentId=" + id).subscribe((res: any) => {
        if (res.result) {
          this.getDepartment();
          alert("Department Deleted Successfully.")
        } else {
          alert(res.message)
        }
      })
    }
  }
  onReset() {
    this.deptObj = {
      "departmentId": 0,
      "departmentName": "",
      "departmentLogo": ""
    }
  }

  getData(data :any){
    console.log(data);
  }
}
