import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  // userObj: any={
  //   userName:'',
  //   password:'',
  // };
  userObj: any={
    userName:'',
    password:'',
  };

  router = inject(Router); 
  http = inject(HttpClient) 
  onLogin(){
    console.log(this.userObj)
    this.http.post('/api/Complaint/login',this.userObj).subscribe((res:any)=>{
      if(res.result){
        alert('Login Success');
        localStorage.setItem('emailId',JSON.stringify(res.data))
        this.router.navigateByUrl('layout');
      }
      else{
        alert(res.message);
      }
    })
    // if(this.userObj.userName=="admin" && this.userObj.password=="1234"){
    //   alert('Login Success');
    //   localStorage.setItem('Login user',this.userObj.userName);
    //   this.router.navigateByUrl('layout');
    // }else{
    //   alert('Wrong password and username');
    // }
  }

}
