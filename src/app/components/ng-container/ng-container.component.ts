import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css'
})
export class NgContainerComponent {

  isContainer: boolean =true;
  http = inject(HttpClient);
  userData:any [] =[];
  isApi:boolean=false; 

  getUser(){
    this.isApi=true;
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      this.userData=res;
      this.isApi=false;
    })
  }
}
