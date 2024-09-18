import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicePrestedListComponent } from './service-prested/service-prested-list/service-prested-list.component';
import { ServicePrestedFormComponent } from './service-prested/service-prested-form/service-prested-form.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'service', component: ServicePrestedFormComponent},
  {path: 'serviceList', component: ServicePrestedListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
