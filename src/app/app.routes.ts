import { Routes } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectiveComponent } from './components/structural-directive/structural-directive.component';
import { IfelseComponent } from './components/ifelse/ifelse.component';
import { ForSwitchCaseComponent } from './components/for-switch-case/for-switch-case.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { PutApiComponent } from './components/put-api/put-api.component';
import { ComponentLifeCycleEventComponent } from './components/component-life-cycle-event/component-life-cycle-event.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { NgContainerComponent } from './components/ng-container/ng-container.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { DecoratorsComponent } from './decorators/decorators.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './services/auth.guard';
import { SignalComponent } from './components/signal/signal.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: 'layout', component: LayoutComponent,
        children: [
            { path: 'add-emp', component: AddEmployeeComponent },
            { path: 'attribute-directive', component: AttributeDirectiveComponent },
            { path: 'data-binding', component: DataBindingComponent, canActivate:[authGuard] },
            { path: 'emp-list', component: EmployeeListComponent },
            { path: 'structural-directive', component: StructuralDirectiveComponent },
            { path: 'if-else', component: IfelseComponent },
            { path: 'for-switch', component: ForSwitchCaseComponent },
            { path: 'pipe', component: PipeComponent },
            { path: 'template-form', component: TemplateFormComponent },
            { path: 'reactive-form', component: ReactiveFormComponent },
            { path: 'get-api', component: GetApiComponent },
            { path: 'put-api', component: PutApiComponent },
            { path: 'life-cycle-event', component: ComponentLifeCycleEventComponent },
            { path: 'ng-template', component: NgTemplateComponent },
            { path: 'ng-container', component: NgContainerComponent },
            { path: 'view-child', component: ViewChildComponent },
            { path: 'decorators', component: DecoratorsComponent },
            { path: 'signal', component: SignalComponent },
        ]
    },
];
