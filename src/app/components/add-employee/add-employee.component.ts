import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class AddEmployeeComponent {

  http = inject(HttpClient);
  name :string ="Java";
  userList=signal<any[]>([]);
  constructor(private cdRef: ChangeDetectorRef){}
  ngOnInit(): void{
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any)=>{
      // this.userList=res;
      this.name="Html";
      this.userList.set(res);
      // setTimeout(()=>{
      //   this.cdRef.detectChanges()
      // },5000)
    })
  }

  reloadUI(){

  }
}
