import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  studentObj: FormGroup = new FormGroup({
    firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
    lastName: new FormControl(""),
    userName: new FormControl("example@123", [Validators.email]),
    city: new FormControl(""),
    state: new FormControl(""),
    zipCode: new FormControl(""),
    isAcceptTerms: new FormControl(""),
  });

  formValue: any;
  onSubmit() {
    this.formValue = this.studentObj.value;
  }
  onReset() {
    this.studentObj = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(""),
      userName: new FormControl("example@123", [Validators.email]),
      city: new FormControl(""),
      state: new FormControl(""),
      zipCode: new FormControl(""),
      isAcceptTerms: new FormControl(""),
    })
  }
}