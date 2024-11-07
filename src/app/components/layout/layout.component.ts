import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../services/department.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
loggedUserData: any;
selectedRole: string ='';
  constructor(private deptService: DepartmentService ){
    const loggedUser=localStorage.getItem('emailId');
    if(loggedUser != null){
      this.loggedUserData=JSON.parse(loggedUser)
    }
  }

  router=inject(Router);
  onLogout(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl('login');
  }
  onSelectedChange(role : string){
    this.deptService.onRoleChange$.next(role);
    this.deptService.role$.next(role)
  }

}
