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

  constructor(private clientService: ClientsService,
    private servicoService: ServicePrestedService){
    this.servico = new ServiceP();
  }

  ngOnInit(): void {
    this.clientService.getClients()
                      .subscribe(response => this.clients=response);
  }

  onSubmit(){
    console.log(this.servico)
    this.servicoService.salvar(this.servico).subscribe(response =>{
      console.log(response);
    })
  }
}
