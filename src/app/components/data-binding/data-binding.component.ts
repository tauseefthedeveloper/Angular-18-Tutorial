import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {


  courseName: string = "Angular";
  inputType="Checkbox";
  rollNo:number=123;
  stateName:string="Maharashtra";
  isIndian:boolean=true;
  currentDate:Date=new Date();
  myClassname:string = "bg-danger";
  name=signal("Tauseef Khan");

  constructor(){
  }

  changeCourseName(){
    // this.courseName="React JS";
    this.name.set("Rahul Khan")
  }
  showAlert(message:string){
    alert(message)
  }

}