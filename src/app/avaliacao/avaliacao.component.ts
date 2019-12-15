import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html',
  styleUrls: ['./avaliacao.component.scss']
})
export class AvaliacaoComponent implements OnInit {

  constructor() { }

  comentarios:any;
    mostra1 = 1;
    mostra2 = 2;
    mensagem : any;

  ngOnInit() {
  
  }
  

  Enviar(i){
    
  }
  Cancelar(){

  }
}
