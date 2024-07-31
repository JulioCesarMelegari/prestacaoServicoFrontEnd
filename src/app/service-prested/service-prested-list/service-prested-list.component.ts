import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-prested-list',
  templateUrl: './service-prested-list.component.html',
  styleUrls: ['./service-prested-list.component.css']
})
export class ServicePrestedListComponent implements OnInit{

  nome: string='';
  mes: number=0;
  meses: number[];

  constructor(){
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];

  }

  ngOnInit(): void {

  }

  consultar(){
    console.log(this.nome, this.mes)
  }

}
