import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {

  div1Visible:boolean=true;
  div2Visible:boolean=false;
  num1:string="";
  num2:string="";
  selectedStatus:string="";
  show(){
    this.div1Visible=true;
  }
  hide(){
    this.div1Visible=false;
  }
  toggle(){
    this.div2Visible=!this.div2Visible;
  }

  currentRole:string='';
  Role:string='';
  constructor(private deptService: DepartmentService){
    this.deptService.onRoleChange$.subscribe((role:string)=>{
      this.currentRole=role;
    })
    this.deptService.role$.subscribe((role:string)=>{
      this.Role=role;
    })
  }
}
