import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {TemplateModule} from './template/template.module';
import { HomeComponent } from './home/home.component'
import { ClientsModule } from './clients/clients.module';
import { ClientsService } from './clients.service';
import { ServicePrestedModule } from './service-prested/service-prested.module';
import { ServicePrestedService } from './service-prested.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TemplateModule,
    ClientsModule,
    ServicePrestedModule
  ],
  providers: [
    ClientsService,
    ServicePrestedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
