import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [ CommonModule,FormsModule ],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {

  constructor(private router : Router){
  }

  isDivVisible:boolean=true;
  isDivVisible2:boolean=true;
  num1:string='';
  num2:string='';
  isActive:boolean=false;
  country:string="";  
  cityName:string []=['Mumbai','Pune','Thane','Gujrat'];
  student:any[]=[
    {studID:11,name:"AAA",city:"Raipur",isActives:false},
    {studID:12,name:"BBB",city:"Mumbai",isActives:false},
    {studID:13,name:"CCC",city:"Pune",isActives:true},
    {studID:14,name:"DDD",city:"Jalgoun",isActives:false},
    {studID:15,name:"FFF",city:"Thane",isActives:true},
  ]


  navigateToAttribute(){
    this.router.navigateByUrl('attribute-directive');
  }

  hideDiv1(){
    this.isDivVisible=false;
  }
  showDiv1(){
    this.isDivVisible=true;
  }
  toggleDiv2(){
    this.isDivVisible2=!this.isDivVisible2;
  }
}
