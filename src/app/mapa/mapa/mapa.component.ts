import { Component, OnInit } from '@angular/core';
// import { Escola } from 'src/app/models/escola';
// import { EscolasService } from 'src/app/_infra/escolas.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  lat: number = -30.0277;
  long: number = -51.2287;
  mensagemErro: any;
  escolas: any[];
  detalhesEscola: string;

  constructor() { 

  }

  ngOnInit() {
    
  }

  clickedMarker(label: string) {
    this.detalhesEscola = label;
  }
}
