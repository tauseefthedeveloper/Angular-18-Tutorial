import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../components/constant/constant';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  public onRoleChange$ : Subject<string> = new Subject<string>;
  public role$ : BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private http:HttpClient) {
  }
  getAllDept(){
    //return this.http.get("https://projectapi.gerasim.in/api/Complaint/GetParentDepartment")
    //return this.http.get(Constant.API_URL+Constant.department_methods.GET_PARENT_Dept)
	return this.http.get(`/api/Complaint/${Constant.department_methods.GET_PARENT_Dept}`);

  }
  saveNewDept(obj:any){
    // return this.http.post("https://projectapi.gerasim.in/api/Complaint/AddNewDepartment",obj);
    //return this.http.post(`${Constant.API_URL}${Constant.department_methods.ADD_NEW_DEPT}`,obj);
	return this.http.post(`/api/Complaint/${Constant.department_methods.ADD_NEW_DEPT}`, obj);

  }
  addTwoNo(num1:number,num2:number){
    return num1+num2;
  }
}
