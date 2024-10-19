import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  loginError: boolean = false;
  cadastrando: boolean = false;

  constructor(private router: Router){

  }

  ngOnInit(): void {
    this.cadastrando = false;
  }

  onSubmit(){
    this.router.navigate(['/home'])
    console.log(`User: ${this.username}, Pass: ${this.password}`);
  }

  preparaCadastrar( event: any ){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

}
