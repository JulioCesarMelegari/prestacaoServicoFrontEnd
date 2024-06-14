import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicePrestedFormComponent } from './service-prested-form/service-prested-form.component';
import { ServicePrestedListComponent } from './service-prested-list/service-prested-list.component';

const routes: Routes = [
  {path: 'servico-prestado-form', component: ServicePrestedFormComponent},
  {path: 'servico-prestado-listagem', component: ServicePrestedListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicePrestedRoutingModule { }
