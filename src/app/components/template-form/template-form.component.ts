import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Constant } from '../constant/constant';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [JsonPipe,FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  studentObj:any = {
    firstname:'',
    lastname:'',
    username:'',
    city:'',
    state:'',
    zipCode:'',
    isAcceptTerms:false
  };
  formValue:any={};
  validation_messages:any = Constant.Validation_messages;
  onSubmit(){
    this.formValue=this.studentObj;
  };
  onResetForm(){
    this.studentObj= {
      firstname:'',
      lastname:'',
      username:'',
      city:'',
      state:'',
      zipCode:'',
      isAcceptTerms:false
    };
  }
}
