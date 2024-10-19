import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePrestedFormComponent } from './service-prested-form/service-prested-form.component';
import { ServicePrestedListComponent } from './service-prested-list/service-prested-list.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'serviceP', component: LayoutComponent, children:[
    {path: 'form', component: ServicePrestedFormComponent},
    {path: 'list', component: ServicePrestedListComponent},
    { path: '', redirectTo: '/serviceP/list', pathMatch: 'full' }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePrestedRoutingModule { }
