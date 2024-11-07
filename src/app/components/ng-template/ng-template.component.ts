import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

  isUserLoggedIn:boolean=false;
  userName:string='Tauseef Khan';
  @ViewChild('dynamicTemplate') dynTemplate : TemplateRef<any> | undefined;
  @ViewChild('dynamicTemplate1') dynTemplate1 : TemplateRef<any> | undefined;
  @ViewChild('dynamicTemplate2') dynTemplate2 : TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynContainer: ViewContainerRef | undefined;
  @ViewChild('dynamicContainer1',{read:ViewContainerRef}) dynContainer1: ViewContainerRef | undefined;
  @ViewChild('dynamicContainer2',{read:ViewContainerRef}) dynContainer2: ViewContainerRef | undefined;

  loadTemplate(){
    if(this.dynTemplate) {
      this.dynContainer?.createEmbeddedView(this.dynTemplate)
    }
  }
  loadTemplate1(){
    if(this.dynTemplate1) {
      this.dynContainer1?.createEmbeddedView(this.dynTemplate1)
    }
  }
  loadTemplate2(){
    if(this.dynTemplate2) {
      this.dynContainer2?.createEmbeddedView(this.dynTemplate2)
    }
  }

}