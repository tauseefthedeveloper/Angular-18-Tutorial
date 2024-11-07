import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css'
})
export class AttributeDirectiveComponent {

  div1BgColor:string='';
  isDiv2Active:boolean=false;
  num1:string='';
  num2:string='';
  isActive:boolean=false;
  countryName:string='';

  student:any[]=[
    { studID:11, totalMarks:23 ,gender:'Male', name:"AAA",city:"Raipur",isActives:false},
    { studID:12, totalMarks:34 ,gender:'Female', name:"BBB",city:"Mumbai",isActives:false},
    { studID:13, totalMarks:73 ,gender:'Male', name:"CCC",city:"Pune",isActives:true},
    { studID:14, totalMarks:83 ,gender:'Male', name:"DDD",city:"Jalgoun",isActives:false},
    { studID:15, totalMarks:93 ,gender:'Female', name:"FFF",city:"Thane",isActives:true},
  ]
  customeStyle:any = {
    'color':'white',
    'text-align':'center',
    'border-radius':'50%',
    'background-color':'crimson',
    'width':'350px',
    'height':'200px'
  }


  AddRedColor(){
    this.div1BgColor="bg-danger";
  }
  AddBlueColor(){
    this.div1BgColor="bg-primary";
  }

  toggleDiv2(){
    this.isDiv2Active=!this.isDiv2Active;
  }

}
