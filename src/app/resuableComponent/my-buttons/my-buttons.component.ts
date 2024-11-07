import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-my-buttons',
  standalone: true,
  imports: [],
  templateUrl: './my-buttons.component.html',
  styleUrl: './my-buttons.component.css'
})
export class MyButtonsComponent {

  @Input() btnText: string='';
  @Input() btnClass: string='';

  @Output() onBtnClick=new EventEmitter<any>();
  @Output() KhanBtn=new EventEmitter<any>();
 
  onClickBtn(){
    this.onBtnClick.emit('Hello from test btn');
  }
}
