import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url: string = 'http://localhost:8080/controlService/clientes'

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client>{
    return this.http.post<Client>(this.url, client);
  }

  getClient() : Client{
    let client: Client = new Client();
    client.id=1
    client.name="brasileiro";
    client.cpf="4585666";
    client.dateRegister="12/05/2016"
    return client
  }
}
