import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from './../../clients.service';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';

@Component({
  selector: 'app-clients-form',
  templateUrl: './clients-form.component.html',
  styleUrls: ['./clients-form.component.css'],
})
export class ClientsFormComponent implements OnInit {
  cliente: Client;
  success: boolean = false;
  erros: String[] | null = [];

  public Id: number = 0;

  constructor(
    private service: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.cliente = new Client();
  }

  ngOnInit(): void {
    // Captura o parâmetro da URL
    this.activatedRoute.paramMap.subscribe((params) => {
      const idParam = params.get('id');

      if (idParam !== null) {
        const id = +idParam; // Converte o parâmetro para número se não for nulo
        // Chame o método do serviço para buscar o cliente por ID
        this.service.getClientById(id).subscribe((cliente) => {
          this.cliente = cliente;
        });
      } else {
        // Trate o caso em que o parâmetro 'id' é nulo
        this.cliente = new Client();
      }
    });
  }

  onSubmit() {
    if (this.Id) {
      this.service.update(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.erros = null;
        },
        (errorResponse) => {
          this.erros = ['Erro ao atualizar o cliente!'];
        }
      );
    } else {
      this.service.save(this.cliente).subscribe(
        (response) => {
          this.success = true;
          this.erros = null;
          this.cliente = response;
        },
        (errorResponse) => {
          this.success = false;
          this.erros = errorResponse.error.errors;
        }
      );
    }
  }

  returnList() {
    this.router.navigate(['/clients-list']);
  }
}
