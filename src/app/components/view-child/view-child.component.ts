import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../../resuableComponent/alert/alert.component';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent implements AfterViewInit{

  @ViewChild('txt') textBox?:ElementRef;
  @ViewChild(AlertComponent) alertBox?:AlertComponent;
  
  ngAfterViewInit(): void {
      const value= this.textBox?.nativeElement.value;
      const alertValue= this.alertBox?.alertMode;
      console.log('ValueView: '+value)
      console.log('AlertValue:'+alertValue)
  }

}
