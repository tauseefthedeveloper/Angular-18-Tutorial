import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalComponent {

  firstName = signal('Tauseef')
  fname:string='';
  rollno=signal<number>(123)
  changeCourse:string='Java'
  lastName=signal('Khan')
  fullName=computed(()=> this.firstName()+' '+this.lastName())
  cityList = signal(['Pune','Lucknow','Nashik'])
  studentObj = signal({
    name:'Rahul',
    city:'Dumariya Ganj'
  })

  constructor(){
    this.fname=this.firstName();
    setTimeout(() => {
      // this.firstName.set('Dot Net')
      this.changeCourse='HTML'
    }, 5000);
  }

  onChange(){
    this.firstName.set('Sachin')
  }
  onChangeLastName(){
    this.lastName.set('Tendulker')
  }

  addCity(){
    this.cityList.set([...this.cityList(),'Noida'])
  }

  AddstudentCity(){
    this.studentObj.set({...this.studentObj(),city:'Bhawani Ganj'})
  }
}
