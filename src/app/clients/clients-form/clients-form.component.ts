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

  constructor(private service: ClientsService){
   this.cliente = service.getClient();
  }

  onSubmit(){
    console.log(this.cliente);
  }

}
