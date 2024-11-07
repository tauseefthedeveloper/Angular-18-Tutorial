import { CommonModule } from '@angular/common';
import { Component, Input,OnChanges } from '@angular/core';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnChanges {

  @Input() message : string='';
  @Input() alertType : string='';
  alertMode: string= 'Tauseef';
  ngOnChanges():void {
    console.log("ngOnChanges")
  }
}