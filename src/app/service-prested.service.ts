import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceP } from './serviceP';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicePrestedService {

  URL: string = 'http://localhost:8080/controlService/servicos'

  constructor(private http:HttpClient) { }

  salvar(servico:ServiceP): Observable<ServiceP>{
    return this.http.post<ServiceP>(this.URL, servico);
  }
}


