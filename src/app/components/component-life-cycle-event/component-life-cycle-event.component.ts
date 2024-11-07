import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-life-cycle-event',
  standalone: true,
  imports: [],
  templateUrl: './component-life-cycle-event.component.html',
  styleUrl: './component-life-cycle-event.component.css'
})
export class ComponentLifeCycleEventComponent implements OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy,OnChanges {

  constructor(){
    console.log("Constructor called")
  }
  ngOnInit(): void {
    console.log("ngOnInit")
  }
  ngDoCheck(): void {
    console.log("ngDoCheck") 
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }
   ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
   }
   ngOnDestroy(): void {
    console.log("ngOnDestroy")
   }
   ngOnChanges(): void {
    console.log("ngOnChanges")
   }
}
