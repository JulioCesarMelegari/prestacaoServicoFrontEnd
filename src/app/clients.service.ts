import { Injectable } from '@angular/core';
import { Client } from './clients/client';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor() { }

  getClient() : Client{
    let client: Client = new Client();
    client.id=1
    client.name="brasileiro";
    client.cpf="4585666";
    client.dateRegister="12/05/2016"
    return client
  }
}
