import { Component } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from './../../clients.service';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css']
})
export class ClientsFormComponent {

  cliente: Client;
  success: boolean = false;
  erros : String[] | null = []

  constructor(private service: ClientsService){
   this.cliente = new Client();
  }

  onSubmit(){
    this.service
      .save(this.cliente)
      .subscribe(response =>{
        this.success = true;
        this.erros = null;
        this.cliente = response;
      }, errorResponse =>{
        this.success=false;
        this.erros = errorResponse.error.errors;
      })
  }

}
