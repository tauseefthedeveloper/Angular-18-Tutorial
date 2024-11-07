import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../../pipes/na.pipe';
import { DepartmentService } from '../../services/department.service';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe, PercentPipe, CurrencyPipe, DecimalPipe, UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {

  firstname: string = "Tauseef";
  titleis: string = "welcome to angular tutorial";

  currentDate: Date = new Date();

  decimalno: any = 23.53342;
  amount: any = 22039;
  percentVal: any = 0.3234;
  student: any = {
    'id': 1,
    'name': 'Tausef',
    'address': 'Mumbai',
    'city':''
  };
  currentTime:Observable<Date>=new Observable<Date>;
  currentRole:string='';
  role:string='';

  constructor( private deptService: DepartmentService ){
    this.currentTime= interval(1000).pipe(map(()=> new Date()))
    this.deptService.onRoleChange$.subscribe((role:string) => {
      this.currentRole=role; 
    })
    this.deptService.role$.subscribe((role:string)=>{
      this.role=role;
    })
  }

}
