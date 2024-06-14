import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/clients/client';
import { ClientsService } from 'src/app/clients.service';

@Component({
  selector: 'app-service-prested-form',
  templateUrl: './service-prested-form.component.html',
  styleUrls: ['./service-prested-form.component.css'],
})
export class ServicePrestedFormComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientsService) {}

  ngOnInit(): void {
    this.clientService.getClients()
                      .subscribe(response => this.clients=response);
  }

  onSubmit(){
    console.log('submit');
  }
}
