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

  update(client: Client): Observable<Client>{
    return this.http.put<Client>(`${this.url}/${client.id}`,client);
  }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(this.url);
  }

  getClientById(id: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/${id}`);
  }

  deleteClient(client: Client): Observable<any>{
    return this.http.delete<any>(`${this.url}/${client.id}`);
  }
}
