import { TitleCasePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { AlertComponent } from "../../resuableComponent/alert/alert.component";
import { Customer } from '../../models/class/customer';
import { IUser } from '../../models/interface/IUsers';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [TitleCasePipe, AlertComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  userList:IUser[]=[];
  customerData:Customer[]= [];
  alertMsg:string = 'Wlcm to chanage alert';
  // http=inject(HttpClient);   inject
  //dependency injections
  constructor(private http:HttpClient){

  };

  onClickChangeAlert(){
    this.alertMsg='This the changed alert';
  }

  getAllUser(){
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userList=res;
    });
  }
  getCustomerData(){
    this.http.get('/api/RealEstate/GetAllCustomers').subscribe((res:any)=>{
      this.customerData=res.data;
	  console.log(res.data);
    })
  }
}
