import { Component, OnInit } from '@angular/core';
import { Client } from '../client';
import { ClientsService } from 'src/app/clients.service';
import { ClientResponse } from '../clientResponse';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {

  clientes: Client[] = [];
  clienteSelecionado: Client | undefined;
  mensagemSucesso: string | undefined;
  mensagemErro: string | undefined;


  constructor(private service: ClientsService, private router: Router){  }

  ngOnInit(): void {
    this.listClients();
  }

  listClients(){
    this.service.getClients()
      .subscribe(response =>{
        this.clientes = response;
      }, errorResponse =>{
        console.log("erro ao buscar lista no banco")
        //this.erros = errorResponse.error.errors;
      })
  }

  newClients(){
    this.router.navigate(['/clients-form'])
  }

  getClientDelete(cliente: Client){
    this.clienteSelecionado = cliente;
  }

  delete(){
    if(this.clienteSelecionado != undefined){
      this.service.deleteClient(this.clienteSelecionado).subscribe(
        response=>{
          this.mensagemSucesso = "Cliente deletado com sucesso!"
          this.ngOnInit();
        },
        erro => this.mensagemErro= "Erro ao deletar o cliente")
    }else{
      this.mensagemErro = "Erro ao selecionar o Cliente!"
    }
  }
}
