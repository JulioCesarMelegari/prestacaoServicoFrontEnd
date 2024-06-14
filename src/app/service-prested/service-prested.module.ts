import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicePrestedRoutingModule } from './service-prested-routing.module';
import { ServicePrestedFormComponent } from './service-prested-form/service-prested-form.component';
import { ServicePrestedListComponent } from './service-prested-list/service-prested-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ServicePrestedFormComponent,
    ServicePrestedListComponent
  ],
  imports: [
    CommonModule,
    ServicePrestedRoutingModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    ServicePrestedFormComponent,
    ServicePrestedListComponent
  ]
})
export class ServicePrestedModule { }
