import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for-switch-case',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for-switch-case.component.html',
  styleUrl: './for-switch-case.component.css'
})
export class ForSwitchCaseComponent {

  dayNumber: string = '';
  
  city: string[] = [
    'Pune', 'Mumbai', 'Thane', 'Nagpur', 'Vanaras'
  ]
  student: any[] = [
    { studID: 12, name: 'AAA', city: 'Pune', isActive: true },
    { studID: 13, name: 'BBB', city: 'Mumbai', isActive: false },
    { studID: 14, name: 'CCC', city: 'Lucknow', isActive: false },
    { studID: 15, name: 'DDD', city: 'Thane', isActive: true },
    { studID: 16, name: 'FFF', city: 'Gujrat', isActive: false },
    { studID: 17, name: 'GGG', city: 'Surat', isActive: false },
    { studID: 18, name: 'HHH', city: 'Vanaras', isActive: true },
  ]

}
