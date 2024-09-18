import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceP } from './serviceP';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ServicePBusca } from './servicePBusca';

@Injectable({
  providedIn: 'root'
})
export class ServicePrestedService {

  URL: string = 'http://localhost:8080/controlService/servicos'

  constructor(private http:HttpClient) { }

  salvar(servico:ServiceP): Observable<ServiceP>{
    return this.http.post<ServiceP>(this.URL, servico);
  }

  buscar(nome: string, mes: number): Observable<ServicePBusca[]>{
    const httpParams = new HttpParams()
      .set("nome",nome)
      .set("mes", mes.toString());

    const url = this.URL + "?" + httpParams.toString();
    console.log(url);
    return this.http.get<any>(url);
  }
}


