import { Injectable } from '@angular/core';
import { Client } from './clients/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClientResponse } from './clients/clientResponse';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private url: string = 'http://localhost:8080/controlService/clientes'

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client>{
    return this.http.post<Client>(this.url, client);
  }

  getClients(): Observable<ClientResponse[]>{
    return this.http.get<ClientResponse[]>(this.url);
  }
}
