import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from 'src/app/clients.service';
import { ServiceP } from 'src/app/serviceP';
import { ServicePrestedService } from 'src/app/service-prested.service';

@Component({
  selector: 'app-service-prested-form',
  templateUrl: './service-prested-form.component.html',
  styleUrls: ['./service-prested-form.component.css'],
})
export class ServicePrestedFormComponent implements OnInit {
  clients: Client[] = [];
  servico: ServiceP;
  success: boolean = false;
  erros: String[] | null = [];

  constructor(private clientService: ClientsService,
    private servicoService: ServicePrestedService){
    this.servico = new ServiceP();
  }

  ngOnInit(): void {
    this.clientService.getClients()
                      .subscribe(response => this.clients=response);
  }

  onSubmit(){
    this.servicoService.salvar(this.servico).subscribe(
      (response) => {
        this.success = true;
        this.erros = null;
        this.servico = new ServiceP();
      },
      (errorResponse) => {
        this.success = false;
        this.erros = errorResponse.error.errors;
      }
    );
  }
}
